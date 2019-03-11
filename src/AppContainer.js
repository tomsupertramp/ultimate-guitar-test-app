import { connect } from 'react-redux';

import { actions } from './ducks';

import AppComponent from './AppComponent';

const mapDispatchToProps = dispatch => ({
  search: value => dispatch(actions.search(value)),
});

export default connect(null, mapDispatchToProps)(AppComponent);
