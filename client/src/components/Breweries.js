import React, { Component } from 'react';
import { 
  Segment,
  Dimmer, 
  Loader, 
  List, 
  Header, 
  Button 
} from 'semantic-ui-react';
import axios from 'axios';

class Breweries extends Component {
  state = { beers: [], loaded: false, page: 1, perPage: 10 };

  componentDidMount() {
    axios.get(`/api/all_breweries?page=${this.state.page}&per_page=${this.state.perPage}`)
      .then( res => {
        this.setState({ breweries: res.data.entries, loaded: true })
      })
      .catch( err => {
        console.log(err);
      });
  }
  
  nextBrewery = () => {
    axios.get(`/api/all_breweries?page=${this.state.page + 1}&per_page=${this.state.perPage}`)
      .then( res => {
        this.setState({ breweries: res.data.entries, loaded: true, page: this.state.page + 1 })
      })
      .catch( err => {
        console.log(err);
      });
  }

  prevBrewery = () => {
    axios.get(`/api/all_breweries?page=${this.state.page - 1}&per_page=${this.state.perPage}`)
    .then( res => {
      this.setState({ breweries: res.data.entries, loaded: true, page: this.state.page - 1 })
    })
    .catch( err => {
      console.log(err);
    });
  }

  displayBreweries = () => {
    return this.state.breweries.map( brewery => {
      return(
        <List.Item>
          <List.Icon name='beer' size='large' verticalAlign='middle' />
          {brewery.name}
        </List.Item>
      )
    });
  }

  render() {
    if(this.state.loaded)
      return(
        <Segment basic>
          { this.displayBreweries() }
          <Button onClick={this.prevBrewery}>Previous Page</Button>
          <Button onClick={this.nextBrewery}>Next Page</Button>
        </Segment>
      )
    else
      return(
        <Dimmer active>
          <Loader>Loading Breweries...</Loader>
        </Dimmer>
      )
  }
}

export default Breweries;