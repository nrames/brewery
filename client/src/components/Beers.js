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

  displayBeers = () => {
    return this.props.beers.map( beer => {
      return(
        <List>
          
        </List>
      );
    })
  }

  render() {
    return (
      <Segment basic>
        { this.displayBeers() }
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { beers: state.beers };
}

export default connect(mapStateToProps)(Beers);