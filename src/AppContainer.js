import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { actions } from './ducks';

import AppComponent from './AppComponent';

const mapStateToProps = ({ app: { albums, savedAlbums } }) => ({
  albums,
  savedAlbums,
});

const mapDispatchToProps = dispatch => ({
  search: value => dispatch(actions.search(value)),
  saveAlbum: album => dispatch(actions.saveAlbum(album)),
  removeAlbum: id => dispatch(actions.removeAlbum(id)),
  getSavedAlbums: () => dispatch(actions.getSavedAlbums()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { getSavedAlbums } = this.props;
      getSavedAlbums();
    }
  })
)(AppComponent);
