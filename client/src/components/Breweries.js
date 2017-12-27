import React, { Component } from 'react';
import { fetchBreweries } from '../actions/breweries';
import { List, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class Breweries extends Component {
  state = { breweries: [] }

  componentDidMount() {
    this.props.dispatch(fetchBreweries());
  }

  render() {
    return (
      <Segment basic>
        <List>
          Need to display breweries list
        </List>    
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries };
}

export default connect(mapStateToProps)(Breweries);