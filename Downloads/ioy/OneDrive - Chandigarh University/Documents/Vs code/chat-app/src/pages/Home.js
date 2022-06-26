import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Grid fuild className="h-100">
      <Row>
        <Col xs={24} md={8}>
          <Sidebar />{' '}
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
