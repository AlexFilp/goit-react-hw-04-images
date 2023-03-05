import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearchSubmit = query => {
    this.setState({ query, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
          onLoad={this.loadMore}
        />

        <ToastContainer position="top-right" autoClose={2000} limit={3} />
      </div>
    );
  }
}

//  async componentDidMount() {
//     const url = `${this.#BASE_URL}?q=cat&page=1&key=${
//       this.#API_KEY
//     }&image_type=photo&orientation=horizontal&per_page=12`;

//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ imageTitle: data });
//     console.log(data);
//     return data;
//   }

// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}
