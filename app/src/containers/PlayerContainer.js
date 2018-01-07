import { connect } from 'react-redux';

const PlayerContainer = (props) => { 
  return (
    <Player {...props} />
  );
};

const mapStateToProps = (state) => { 
  const { player } = state;

  return {
    onTrackClick: dispatch(,
  }
};

export default connect(mapStateToProps)(PlayerContainer);