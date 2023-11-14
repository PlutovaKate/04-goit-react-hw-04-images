import { useState } from 'react';
import { ImageGalleryItemLi } from './ImageGalleryItem.styled';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';
import ModalWindow from 'components/Modal/Modal';

const ImageGalleryItem = ({ smallImage, largeImage, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImage
        src={smallImage}
        alt={tags}
        onClick={() => openModal()}
      />
      <div></div>
      <ModalWindow
        isModalOpen={isModalOpen}
        imgModal={largeImage}
        altModal={tags}
        closeModal={closeModal}
      />
    </ImageGalleryItemLi>
  );
};

export default ImageGalleryItem;
