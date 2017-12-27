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

  displayBreweries = () => {
    return this.props.breweries.map( brewery => {
      return(
        <List>
          <List.Item>
            {brewery.name}
          </List.Item>  
        </List>
      );
    })
  }

  render() {
    return (
      <Segment basic>
        { this.displayBreweries() }
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { breweries: state.breweries };
}

export default connect(mapStateToProps)(Breweries);