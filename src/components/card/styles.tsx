import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  background: #ffffff;

  img {
    width: 100%;
  }
`;

export const CardBody = styled.div`
  padding: 12px 16px;

  p {
    font-size: 16px;
    font-weight: 700;
  }

  hr {
    margin: 16px 0;
    border-top: 1px solid #d2d2d2;
  }
`;
