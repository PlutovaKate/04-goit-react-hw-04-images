import { Component } from 'react';
import { Layout } from './Layout';
import ModalWindow from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import * as ImageService from './api';
import { Notification } from './Layout';
import toast, { Toaster } from 'react-hot-toast';
import Button from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    hits: [],
    error: false,
    isLoading: false,
    totalHits: 0,
    page: 1,
  };

  onSubmit = query => {
    if (!query) return;
    this.setState({
      hits: [],
      page: 1,
      query,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true, error: false });
        {
          const {
            data: { hits },
          } = await ImageService.fetchImages({
            query: this.state.query,
            page: this.state.page,
          });

          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
          }));
          if (hits.length > 0) {
            toast.success('We found images for you');
          }
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  changePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { error, hits, isLoading, totalHits } = this.state;
    return (
      <Layout>
        <SearchBar onSubmit={this.onSubmit} />
        {hits.length === 0 && !error && (
          <Notification>Try to find some images</Notification>
        )}
        {isLoading && <Loader />}
        {error && (
          <Notification>Whoops! Error! Please reload this page!</Notification>
        )}
        {hits.length > 0 && <ImageGallery images={hits} />}

        {hits.length !== totalHits && <Button changePage={this.changePage} />}
        <ModalWindow />
        <Toaster />
      </Layout>
    );
  }
}
