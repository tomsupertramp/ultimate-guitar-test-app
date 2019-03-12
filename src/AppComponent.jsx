import React from 'react';
import PropTypes from 'prop-types';
import { size } from 'lodash';

/* Assets */
import logo from './assets/logo.svg';

/* Components */
import Search from './components/Search';
import Albums from './components/Albums';

/* Styles */
import styles from './App.module.scss';

const propTypes = {
  search: PropTypes.func,
  albums: PropTypes.object,
};

const App = ({
  search,
  saveAlbum,
  removeAlbum,
  albums,
  savedAlbums,
}) => (
  <div className={styles.App}>
    <header className={styles.Header}>
      <img src={logo} alt="logo"/>
      Ultimate Guitar Test App
    </header>

    <main>
      <Search search={search} />
      <Albums items={albums} saveAlbum={saveAlbum} />
      {size(savedAlbums) !== 0 && (
        <section>
          <h2>Сохраненные альбомы</h2>
          <Albums items={savedAlbums} removeAlbum={removeAlbum} />
        </section>
      )}
      

    </main>
  </div>
);

App.propTypes = propTypes;

export default App;