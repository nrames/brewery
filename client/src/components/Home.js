import React, { Component } from 'react';
import { 
  Header,
  Segment, 
  Divider,
  Grid,
  Button,
  Image
} from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import Beers from './Beers';
import Breweries from './Breweries';
import beertaps from '../images/beertaps.jpg'

class Home extends Component {

  render() {
    return(
      <Segment basic style={styles.beerCanvas}>
        <Segment basic textAlign='center'>
          <Header as='h1' style={styles.header1}>Beers and Breweries Guide</Header>
        </Segment>
        <Grid columns padded>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header2}>
                  Beers
              </Header>
              <Divider />
              <Button as={Link} to='/beers' color='orange'>View List</Button>
            </Segment>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header2}>
                  Breweries
              </Header>
              <Divider />
              <Button as={Link} to='/breweries' color='orange'>View List</Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  
  header1: {
    color: 'white'
  },

  header2: {
    color: 'orange'
  },

  beerCanvas: {
    background: `url(${beertaps}) no-repeat center center`,
    backgroundSize: 'cover',
    padding: 0,
    height: '100vh'
  }
}

export default Home;
