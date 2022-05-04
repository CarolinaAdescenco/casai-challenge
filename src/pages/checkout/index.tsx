import React from 'react';

import CardBasket from '../../components/card-basket';
import Layout from '../../components/layout/index';
import { BButton, Link, MessageRow, Row } from '../../components/layout/styles';

interface CardProps {
  id: string;
  url: string;
  title: string;
}

const dogsAdopted = [
  {
    id: '354356c9-b7f3-4374-a7c5-84d30f879973',
    url: 'http://localhost:3000/images/GettyImages-1302704644-e1614113964447.jpg',
    title: 'Goldendoodle Bath Time',
  },
  {
    id: 'a8f64552-ca72-4d3d-8f0c-b7c76644cc5e',
    url: 'http://localhost:3000/images/3D4D57AA-5E09-474E-BC53-0E6D03A18F5C-scaled-e1606771409630.jpg',
    title: 'White puppy resting on a slipper',
  },
  {
    id: '59b0c64f-7f03-4684-88b2-369395ec68a9',
    url: 'http://localhost:3000/images/A9E74F0C-C86F-443C-AD8F-43EE62451CEF-e1606771208368.jpeg',
    title: 'Dog sitting in convertible with sunglasses',
  },
];

const CheckoutPage: React.FC = () => {
  const [loading] = React.useState(false);
  const [dogs] = React.useState<CardProps[]>(dogsAdopted);

  return (
    <Layout loading={loading}>
      {dogs.length >= 1 ? (
        <>
          <h1>Your new friends!</h1>
          <Row>
            {dogs.map((dog: CardProps) => (
              <CardBasket
                key={dog.id}
                id={dog.id}
                image={dog.url}
                title={dog.title}
              />
            ))}
          </Row>
          <BButton>Submit Adoption</BButton>
        </>
      ) : (
        <MessageRow>
          <h1>You still haven`t chosen any pet to adopt</h1>
          <Link to="/dogs">See pets to adopt</Link>
        </MessageRow>
      )}
    </Layout>
  );
};

export default CheckoutPage;
