
// import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';

/* Components */

/* Styles */
// import styles from './Search.module.scss';

const propTypes = {};

const Search = ({ search }) => (
  <Formik
    initialValues={{ term: '' }}
    onSubmit={(values) => search(values)}
    render={props => (
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.values.name}
          name="term"
        />
        <button type="submit">Найти</button>
      </form>
    )}
  />
);

Search.propTypes = propTypes;

export default Search;
