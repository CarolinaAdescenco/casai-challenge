import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  border: 1px solid #d2d2d2;
  background: #ffffff;

  margin: 12px 0;

  img {
    width: 100%;
  }

  @media (min-width: 992px) {
    flex-direction: row;

    img {
      max-width: 200px;
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px 16px;

  p {
    font-size: 16px;
    font-weight: 700;
  }

  hr {
    margin: 16px 0;
    border-top: 1px solid #d2d2d2;
  }

  button {
    font-size: 16px;
    color: #ffffff;
    background: #dc7092;
    padding: 16px 26px;
    border: none;
    border-radius: 4px;
    transition: all 0.2s;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: #f85149;
    }
  }

  @media (min-width: 992px) {
    width: 100%;
    flex-direction: row;
    align-items: center;

    hr {
      display: none;
    }

    button {
      margin-left: auto;
    }
  }
`;
