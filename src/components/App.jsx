import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'Api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { ThreeDots } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    images: [],
    IsSpinner: false,
  };

  async componentDidMount() {
    console.log('componentDidMount')
    // const response = await api.fetchImages(this.state.query);
    // this.setState({images: response.data.hits});
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    if (this.state.query !== prevState.query) {
      const response = await fetchImages(this.state.query);

      this.setState({ images: response.data.hits});
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    this.setState({ query: searchQuery });
  };

  onShowMore = e => {
    e.preventDefault();
  };

  render() {
    const imagesState = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {imagesState.images.length !== 0 && (
          <Button onShowMore={this.onShowMore} />
        )}
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
        
      </>
    );
  }
}
