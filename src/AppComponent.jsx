import React from 'react';

/* Components */
import Search from './components/Search';

/* Styles */
import styles from './App.module.scss';

const App = ({
  search,
}) => (
  <div className={styles.App}>
    <header className={styles.Header}>
      Ultimate Guitar
    </header>

    <main>
      <Search search={search} />

    </main>
  </div>
);

export default App;