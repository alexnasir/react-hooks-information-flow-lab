import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

function Header({onDarkModeClick}) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
    </header>

);
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
