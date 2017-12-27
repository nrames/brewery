import React, { Component } from 'react';
import { 
  Header,
  Segment, 
  Divider,
  Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Beers from './Beers';
import Breweries from './Breweries';

class Home extends Component {

  render() {
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Header as='h1' style={styles.header}>Beers and Breweries Guide</Header>
        </Segment>
        <Grid>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Beers
              </Header>
              <Divider />
                <Beers />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Breweries
              </Header>
              <Divider />
                <Breweries />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Home;
