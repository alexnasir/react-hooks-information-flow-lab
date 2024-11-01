import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ onCategoryChange }) {
  return (
    <select onChange={onCategoryChange}>
      <option value="All">All</option>
      <option value="Fruits">Fruits</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Dairy">Dairy</option>
    </select>
  );
}


Filter.propTypes = {};

Filter.defaultProps = {};

export default Filter;
