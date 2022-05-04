import React from 'react';
import Header from '../header';
import Loading from '../loading';
import { Container, MessageRow } from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  loading?: boolean;
}

const Layout: React.FC<Props> = ({ children, loading }) => {
  return (
    <>
      <Header />
      <Container>
        {!loading ? (
          children
        ) : (
          <MessageRow>
            <Loading />
          </MessageRow>
        )}
      </Container>
    </>
  );
};

export default Layout;
