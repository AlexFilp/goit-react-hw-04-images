import { Blocks } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Blocks height="150" width="150" />
    </div>
  );
};
