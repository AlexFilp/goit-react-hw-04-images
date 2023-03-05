import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={css.ImageGalleryItemImage}
          src={this.props.smallImg}
          alt=""
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} largeImg={this.props.largeImg} />
        )}
      </li>
    );
  }
}
