import axios from 'axios';
import React from 'react';

import Card from '../../components/card';
import Layout from '../../components/layout';
import { Col, MessageRow, Row } from '../../components/layout/styles';

interface CardProps {
  id: string;
  url: string;
  title: string;
}

const DogsPage: React.FC = () => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [dogs, setDogs] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);

    axios
      .get('http://localhost:8080/dogs')
      .then(response => setDogs(response.data.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Layout loading={loading}>
      {!error ? (
        <Row justify="space-between">
          {dogs.map((dog: CardProps) => (
            <Col key={dog.id}>
              <Card id={dog.id} title={dog.title} image={dog.url} />
            </Col>
          ))}
        </Row>
      ) : (
        <MessageRow>
          <h1>Ooops!</h1>
          <p>An error has occurred. Try again later.</p>
        </MessageRow>
      )}
    </Layout>
  );
};

export default DogsPage;
