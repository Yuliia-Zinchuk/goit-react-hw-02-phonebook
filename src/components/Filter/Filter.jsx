import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleChange }) => {
  return (
    <>
      <label className={css.inputForm}>
        <span className={css.labelInput}>FIND CONTACTS BY NAME</span>
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};