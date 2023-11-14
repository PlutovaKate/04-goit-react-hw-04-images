import { useEffect, useState } from 'react';
import { Layout } from './Layout';
import ModalWindow from './Modal/Modal';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import * as ImageService from './api';
import { Notification } from './Layout';
import toast, { Toaster } from 'react-hot-toast';
import Button from './Button/Button';

export const App = () => {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);

  const onSubmit = query => {
    if (!query) return;
    setHits([]);
    setPage(1);
    setQuery(query);
    setTotalHits('');
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        setError(false);

        {
          const {
            data: { hits },
          } = await ImageService.fetchImages({ query, page });
          setHits(prevState => [...prevState, ...hits]);

          if (hits.length > 0) {
            toast.success('We found images for you');
          }
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const changePage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Layout>
      <SearchBar onSubmit={onSubmit} />
      {hits.length === 0 && !error && (
        <Notification>Try to find some images</Notification>
      )}
      {isLoading && <Loader />}
      {error && (
        <Notification>Whoops! Error! Please reload this page!</Notification>
      )}
      {hits.length > 0 && <ImageGallery images={hits} />}

      {hits.length !== totalHits && <Button changePage={changePage} />}
      <ModalWindow />
      <Toaster />
    </Layout>
  );
};
