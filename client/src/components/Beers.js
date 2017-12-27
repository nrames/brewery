import React, { Component } from 'react';
import { fetchBeers } from '../actions/beer';
import { List, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Beers extends Component {
  state = { beers: [] }

  componentDidMount() {
    this.props.dispatch(fetchBeers());
  }

  render() {
    return (
      <Segment basic>
        <List>
          Need to display beers list
        </List>    
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers };
}

export default connect(mapStateToProps)(Beers);