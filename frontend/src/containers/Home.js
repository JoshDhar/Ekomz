import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Jumbotron>
        <Container>
          <h1>Welcome to Admin Dashboard</h1>
        </Container>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
