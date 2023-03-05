import { useState } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Please write something!');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <FcSearch />
      </button>

      <input
        onChange={handleQueryChange}
        name="searchQuery"
        value={searchQuery}
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

// export class OldSearchForm extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleQueryChange = evt => {
//     this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     if (this.state.searchQuery.trim() === '') {
//       return toast.error('Please write something!');
//     }
//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     return (
//       <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//         <button type="submit" className={css.SearchFormButton}>
//           <FcSearch />
//         </button>

//         <input
//           onChange={this.handleQueryChange}
//           name="searchQuery"
//           value={this.state.searchQuery}
//           className={css.SearchFormInput}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     );
//   }
// }
