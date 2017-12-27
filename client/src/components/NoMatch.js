import React, { Component } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return(
      <Segment basic style={styles.fullHeight}>
        <Header as='h1' textAlign='center'>
          Page Not Found
          <Link to='/'> - Go Home</Link>
        </Header>
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
  },
  fullHeight: {
    height: '100vh',
  },
}

export default NoMatch;
