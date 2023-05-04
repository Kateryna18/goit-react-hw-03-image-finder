import React, { Component } from 'react'
import { Searchbar } from './Searchbar/Searchbar'
import api from 'Api/api'
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
  }

  async componentDidUpdate(prevState) {
    if(this.state.query !== prevState.query) {
      const response = await api.fetchImages(this.state.query);

      // this.setState({images: response.data.hits});
      console.log(response.data.hits)
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    this.setState({query: searchQuery})
  }



  render() {
    return (
      <>
      <Searchbar onSubmit={this.onSubmit}/>
      <ImageGallery images={this.state.images}/>
      </>
    )
  }
}

