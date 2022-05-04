import styled from 'styled-components';
import { Link as link } from 'react-router-dom';

interface RowProps {
  justify?: string;
}

export const MessageRow = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Container = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: auto;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin: auto;

  justify-content: ${props => props.justify || 'center'};
`;

export const Col = styled.div`
  width: 100%;
  margin: 16px 0;

  @media (min-width: 768px) {
    width: 48%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const Link = styled(link)`
  color: #6e6e6e;
  font-weight: 400;
  text-decoration: none;
  font-size: 18px;

  transition: 0.2s all;

  &:hover {
    color: #424040;
  }
`;

export const BButton = styled.button`
  width: fit-content;
  font-size: 16px;
  color: #ffffff;
  background: #6a89ca;
  padding: 16px 26px;
  border: none;
  border-radius: 4px;
  transition: all 0.2s;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #506fb1;
  }
`;
