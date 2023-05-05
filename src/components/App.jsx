import React, { Component } from 'react'
import { Searchbar } from './Searchbar/Searchbar'
import { fetchImages } from 'Api/api'
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
  }

  async componentDidMount() {
    // console.log('componentDidMount')
    // const response = await api.fetchImages(this.state.query);
    // this.setState({images: response.data.hits});
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    if(this.state.query !== prevState.query) {
      const response = await fetchImages(this.state.query);
      // console.log('this.state', this.state.query)
      // console.log('prevState', prevState.query)
      // console.log('componentDidUpdate in IF')

      this.setState({images: response.data.hits});
      // console.log(response.data.hits)
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

