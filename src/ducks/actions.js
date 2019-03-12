import types from './types';
import { omit } from 'lodash';

const search = value => ({ type: types.SEARCH_REQUEST, value });

const saveAlbum = (album) => {
  const albums = localStorage.getItem('albums') ? JSON.parse(localStorage.getItem('albums')) : {};
  albums[album.id] = album;
  localStorage.setItem('albums', JSON.stringify(albums));

  return { type: types.SAVE_ALBUM, data: album }
};

const removeAlbum = (id) => {
  const albums = localStorage.getItem('albums') ? JSON.parse(localStorage.getItem('albums')) : {};
  const updatedAlbums = omit(albums, id);
  localStorage.setItem('albums', JSON.stringify(updatedAlbums));

  return { type: types.REMOVE_ALBUM, id }
};

const getSavedAlbums = () => {
  const albums = localStorage.getItem('albums') ? JSON.parse(localStorage.getItem('albums')) : {};

  return { type: types.GET_SAVED_ALBUMS, data: albums }
};

export default {
  getSavedAlbums,
  search,
  saveAlbum,
  removeAlbum,
};