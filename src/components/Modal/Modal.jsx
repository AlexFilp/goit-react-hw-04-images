import { useEffect } from 'react';
import css from './Modal.module.css';
// import * as basicLightbox from 'basiclightbox';

export const Modal = ({ onClose, largeImg }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImg} alt="largeImg" />
      </div>
    </div>
  );
};

// export class OldModal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

// handleKeyDown = e => {
//   console.log(e.code);
//   if (e.code === 'Escape') {
//     this.props.onClose();
//   }
// };

// handleBackdropClick = event => {
//   console.log(event.target);
//   console.log(event.currentTarget);
//   if (event.target === event.currentTarget) {
//     this.props.onClose();
//   }
// };

//   render() {
//     return (
//       <div className={css.Overlay} onClick={this.handleBackdropClick}>
//         <div className={css.Modal}>
//           <img src={this.props.largeImg} alt="largeImg" />
//         </div>
//       </div>
//     );
//   }
// }

// const instance = basicLightbox.create(`
//     <div className={css.Overlay}>
//       <div className={css.Modal}>
//         <img src={largeImg} alt="asd" />
//       </div>
//     </div>
// `);

// instance.show();
