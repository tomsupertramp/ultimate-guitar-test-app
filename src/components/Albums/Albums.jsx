import PropTypes from 'prop-types';
import React from 'react';
import { size, map } from 'lodash';

/* Components */
import Album from '../Album';

/* Styles */
import styles from './Albums.module.scss';

const propTypes = {
  items: PropTypes.object,
  saveAlbum: PropTypes.func,
  removeAlbum: PropTypes.func,
};


const Albums = ({ items, saveAlbum, removeAlbum }) => (
  <div className={styles.Root}>
    {size(items) !== 0 && map(items, item => (
      <Album 
        album={item}
        key={item.id}
        saveAlbum={saveAlbum}
        removeAlbum={removeAlbum}
      />
    ))}
  </div>
);

Albums.propTypes = propTypes;

export default Albums;
