import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'Api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { ThreeDots } from 'react-loader-spinner';
// import { ToastContainer, toast } from 'react-toastify';

export class App extends Component {
  state = {
    query: '',
    images: [],
    IsLoading: false,
    error: null,
    page: 1
  };

  async componentDidMount() {
    console.log('componentDidMount');
    // this.setState({ IsLoading: true });
    // try {
    //   const response = await fetchImages(this.state.query);
    //   this.setState({ images: response.data.hits });
    // } catch (error) {
    //   this.setState({ error });
    // } finally {
    //   this.setState({ IsLoading: false });
    // }
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
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
    } else if (this.state.page !== prevState.page) {
      this.setState({ IsLoading: true });
      try {
        const response = await fetchImages(this.state.query, this.state.page);
        this.setState({ images: response.data.hits });
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
      return {page: prevState.page + 1}
    })
  };

  render() {
    const imagesState = this.state;
    const IsSpinner = imagesState.IsLoading;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {IsSpinner ? 
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /> : <ImageGallery images={this.state.images} />
        }
        {imagesState.images.length !== 0 && (
          <Button onShowMore={this.onShowMore} />
        )}
        
        {/* <ToastContainer autoClose={3000}/> */}
      </>
    );
  }
}
