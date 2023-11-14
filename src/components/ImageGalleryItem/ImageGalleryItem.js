import { Component } from 'react';
import { ImageGalleryItemLi } from './ImageGalleryItem.styled';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';
import ModalWindow from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { smallImage, largeImage, tags } = this.props;
    return (
      <ImageGalleryItemLi>
        <ImageGalleryItemImage
          src={smallImage}
          alt={tags}
          onClick={() => this.openModal()}
        />
        <div></div>
        <ModalWindow
          isModalOpen={this.state.isModalOpen}
          imgModal={largeImage}
          altModal={tags}
          closeModal={this.closeModal}
        />
      </ImageGalleryItemLi>
    );
  }
}

export default ImageGalleryItem;
