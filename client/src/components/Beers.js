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

class Beers extends Component {
  state = { beers: [], loaded: false, page: 1, perPage: 10 };

  componentDidMount() {
    axios.get(`/api/all_beers?page=${this.state.page}&per_page=${this.state.perPage}`)
      .then( res => {
        this.setState({ beers: res.data.entries, loaded: true })
      })
      .catch( err => {
        console.log(err);
      });
  }

  nextBeers = () => {
    axios.get(`/api/all_beers?page=${this.state.page + 1}&per_page=${this.state.perPage}`)
      .then( res => {
        this.setState({ beers: res.data.entries, loaded: true, page: this.state.page + 1 })
      })
      .catch( err => {
        console.log(err);
      });
  }

  prevBeers = () => {
    axios.get(`/api/all_beers?page=${this.state.page - 1}&per_page=${this.state.perPage}`)
    .then( res => {
      this.setState({ beers: res.data.entries, loaded: true, page: this.state.page - 1 })
    })
    .catch( err => {
      console.log(err);
    });
  }

  displayBeers = () => {
    return this.state.beers.map( beer => {
      return(
        <List.Item>
          <List.Icon name='beer' size='large' verticalAlign='middle' />
          {beer.name}
        </List.Item>
      )
    });
  }

  render() {
    if(this.state.loaded)
      return(
        <Segment basic>
          { this.displayBeers() }
          <Button onClick={this.prevBeers}>Previous Page</Button>
          <Button onClick={this.nextBeers}>Next Page</Button>
        </Segment>
    )
    else
      return(
        <Dimmer active>
          <Loader>Loading Beers...</Loader>
        </Dimmer>
      )
  }
}

export default Beers;