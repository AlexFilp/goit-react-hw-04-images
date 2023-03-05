import css from './Searchbar.module.css';
import { SearchForm } from './SearchForm';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
};
