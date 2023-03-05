import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ smallImg, largeImg }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={toggleModal}
        className={css.ImageGalleryItemImage}
        src={smallImg}
        alt="Small Img"
      />
      {showModal && <Modal onClose={toggleModal} largeImg={largeImg} />}
    </li>
  );
};

// export class OldImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     return (
//       <li className={css.ImageGalleryItem}>
//         <img
//           onClick={this.toggleModal}
//           className={css.ImageGalleryItemImage}
//           src={this.props.smallImg}
//           alt=""
//         />
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal} largeImg={this.props.largeImg} />
//         )}
//       </li>
//     );
//   }
// }
