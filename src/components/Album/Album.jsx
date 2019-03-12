import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import styles from './Album.module.scss';

const propTypes = {
  album: PropTypes.object,
  saveAlbum: PropTypes.func,
  removeAlbum: PropTypes.func,
};

const Album = ({ album, saveAlbum, removeAlbum }) => {
  const { title } = album;
  const artist = album['artist-credit'][0].artist.name;
  const type = album['primary-type'];

  return (
    <div className={styles.Root}>
      <span className={styles.Title}>{title}</span>
      <span>{artist}</span>
      <span className={styles.Type}>{type}</span>
      {removeAlbum
        ? <button onClick={() => removeAlbum(album.id)} className={styles.Button}>Удалить</button>
        : <button onClick={() => saveAlbum(album)} className={styles.Button}>Сохранить</button>
      }
    </div>
  );
};

Album.propTypes = propTypes;

export default Album;
