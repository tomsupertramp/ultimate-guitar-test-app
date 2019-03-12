import React from 'react';
import { Formik } from 'formik';

/* Styles */
import styles from './Search.module.scss';

const Search = ({ search }) => (
  <Formik
    initialValues={{ term: '' }}
    onSubmit={(values) => search(values)}
    render={props => (
      <form onSubmit={props.handleSubmit} className={styles.Form}>
        <input
          className={styles.Input}
          type="text"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.name}
          name="term"
        />
        <button type="submit" className={styles.Button}>Найти</button>
      </form>
    )}
  />
);

export default Search;
