import { useState, useEffect } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { Button } from 'components/Button/Button';

export const ImageGallery = ({ query, page, onLoad }) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [showBtn, setShowBtn] = useState(false);

  const API_KEY = '32825732-53fa7d1ce449dfc74c3175ae8';

  const BASE_URL = 'https://pixabay.com/api/';

  // useEffect(() => {
  //   return
  // }, [])

  useEffect(() => {
    if (query === '') {
      return;
    }
    if (page === 1) {
      setItems([]);
    }
    setLoading(true);
    setShowBtn(false);

    fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.hits.length === 0) {
          setShowBtn(false);
          return toast.error('There is no images!');
        }
        if (page === 1) {
          toast.success(`We found ${data.totalHits} images!`);
        }
        setShowBtn(true);
        loadItems(data);

        if (items.length + data.hits.length >= data.totalHits && page !== 1) {
          toast.warn(`Last ${data.hits.length} images :(`);
        }

        if (items.length + data.hits.length >= data.totalHits) {
          setShowBtn(false);
        }
      })
      .catch(error => {
        console.log(error);

        return toast.error('Something went wrong :( Please try again.');
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const loadItems = newData => {
    console.log(newData);

    setItems(prevState => [...prevState, ...newData.hits]);
  };

  return (
    <>
      {loading && <Loader />}

      <ul className={css.ImageGallery}>
        {items &&
          items.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                largeImg={largeImageURL}
              />
            );
          })}
      </ul>
      {showBtn && <Button onClick={onLoad} />}
    </>
  );
};

// export class OldImageGallery extends Component {
// #API_KEY = '32825732-53fa7d1ce449dfc74c3175ae8';

// #BASE_URL = 'https://pixabay.com/api/';

//   state = {
//     loading: false,
//     items: [],
//     showBtn: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevProps.page !== this.props.page ||
//       prevProps.query !== this.props.query
//     ) {
//       if (this.props.page === 1) {
//         this.setState({ items: [] });
//       }
//       this.setState({ loading: true });

//       fetch(
//         `${this.#BASE_URL}?q=${this.props.query}&page=${this.props.page}&key=${
//           this.#API_KEY
//         }&image_type=photo&orientation=horizontal&per_page=15`
//       )
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           if (data.hits.length === 0) {
//             this.setState({ showBtn: false });
//             return toast.error('There is no images!');
//           }
//           if (this.props.page === 1) {
//             toast.success(`We found ${data.totalHits} images!`);
//           }
//           this.setState({
//             showBtn: true,
//           });
//           this.loadItems(data);

//           if (
//             this.state.items.length + data.hits.length >= data.totalHits &&
//             this.props.page !== 1
//           ) {
//             toast.warn(`Last ${data.hits.length} images :(`);
//           }

//           if (this.state.items.length + data.hits.length >= data.totalHits) {
//             this.setState({ showBtn: false });
//           }
//         })
//         .catch(error => {
//           console.log(error);

//           return toast.error('Something went wrong :( Please try again.');
//         })
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   loadItems = newData => {
//     console.log(newData);
//     console.log(newData.totalHits);

//     this.setState(prevState => ({
//       items: [...prevState.items, ...newData.hits],
//     }));
//   };

//   render() {
//     const { loading, items } = this.state;
//     return (
// <>
//   {loading && <Loader />}

//   <ul className={css.ImageGallery}>
//     {items &&
//       items.map(({ id, webformatURL, largeImageURL }) => {
//         return (
//           <ImageGalleryItem
//             key={id}
//             smallImg={webformatURL}
//             largeImg={largeImageURL}
//           />
//         );
//       })}
//   </ul>
//   {this.state.showBtn && <Button onClick={this.props.onLoad} />}
// </>
//     );
//   }
// }

// if (status === 'pending') {
//       return (
//         <div className={css.loader}>
//           <Blocks height="150" width="150" />
//         </div>
//       );
//     }

//     if (status === 'resolved') {
//       return (
//         <ul className={css.ImageGallery}>
//           {data.hits.map(({ id, webformatURL, largeImageURL }) => {
//             return <ImageGalleryItem key={id} smallImg={webformatURL} />;
//           })}
//         </ul>
//       );
//     }

//     if (status === 'rejected') {
//       return;

//  return (
//       <>
//         {loading && (
//           <div className={css.loader}>
//             <Blocks height="150" width="150" />
//           </div>
//         )}
//         <ul className={css.ImageGallery}>
//           {data &&
//             data.hits.map(({ id, webformatURL, largeImageURL }) => {
//               return <ImageGalleryItem key={id} smallImg={webformatURL} />;
//             })}
//         </ul>
//       </>
