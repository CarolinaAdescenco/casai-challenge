import React from 'react';
import Card from '../../components/card';
import Layout from '../../components/layout';
import { Col, Link, MessageRow, Row } from '../../components/layout/styles';

interface CardProps {
  id: string;
  url: string;
  title: string;
  adopted?: boolean;
}

const dogsAdopted = [
  {
    id: '354356c9-b7f3-4374-a7c5-84d30f879973',
    url: 'http://localhost:3000/images/GettyImages-1302704644-e1614113964447.jpg',
    title: 'Goldendoodle Bath Time',
    adopted: true,
  },
  {
    id: 'a8f64552-ca72-4d3d-8f0c-b7c76644cc5e',
    url: 'http://localhost:3000/images/3D4D57AA-5E09-474E-BC53-0E6D03A18F5C-scaled-e1606771409630.jpg',
    title: 'White puppy resting on a slipper',
    adopted: true,
  },
  {
    id: '59b0c64f-7f03-4684-88b2-369395ec68a9',
    url: 'http://localhost:3000/images/A9E74F0C-C86F-443C-AD8F-43EE62451CEF-e1606771208368.jpeg',
    title: 'Dog sitting in convertible with sunglasses',
    adopted: true,
  },
];

const AdoptionsPage: React.FC = () => {
  const [loading] = React.useState(false);
  const [dogs] = React.useState<CardProps[]>(dogsAdopted);

  return (
    <Layout loading={loading}>
      {dogs.length >= 1 ? (
        <>
          <h1>Your Companions!</h1>
          <Row justify="space-between">
            {dogs.map((dog: CardProps) => (
              <Col key={dog.id}>
                <Card
                  id={dog.id}
                  title={dog.title}
                  image={dog.url}
                  adopted={dog.adopted}
                />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <MessageRow>
          <h1>You still don`t have companies :(</h1>
          <Link to="/dogs">See pets to adopt</Link>
        </MessageRow>
      )}
    </Layout>
  );
};

export default AdoptionsPage;
