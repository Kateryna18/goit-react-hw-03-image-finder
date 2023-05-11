import React, { Component } from 'react';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'Api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { ThreeDots } from 'react-loader-spinner';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    IsLoading: false,
    error: null,
    page: 1,
    showModal: false,
    currentImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ IsLoading: true });
      try {
        const response = await fetchImages(this.state.query);
        this.setState({ images: response.data.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ IsLoading: false });
      }
    } else if (
      this.state.page !== prevState.page &&
      this.state.query === prevState.query
    ) {
      this.setState({ IsLoading: true });
      try {
        const response = await fetchImages(this.state.query, this.state.page);
        this.setState(prevState => {
          const nextImages = response.data.hits;

          return { images: [...prevState.images, ...nextImages] };
        });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ IsLoading: false });
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    this.setState({ query: searchQuery });
  };

  onShowMore = e => {
    e.preventDefault();
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  showModal = e => {
    e.preventDefault();
    this.setState({ 
      showModal: true,
      currentImage: e.target, });
  };

  render() {
    const {images, IsLoading, showModal, currentImage} = this.state;

    return (
      <div className={css.contentContainer}>
        <Searchbar onSubmit={this.onSubmit} />
        {IsLoading && 
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
         }
        <ImageGallery onClick={this.showModal} images={images} />
        {images.length !== 0 && (
          <Button onShowMore={this.onShowMore} />
        )}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img
              src={currentImage.src}
              alt={currentImage.alt}
            />
          </Modal>
        )}
      </div>
    );
  }
}
