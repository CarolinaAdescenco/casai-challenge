import React from 'react';
import { BButton } from '../layout/styles';
import { CardBody, CardWrapper } from './styles';

interface CardProps {
  id: string;
  image: string;
  title: string;
  adopted?: boolean;
}

const Card: React.FC<CardProps> = ({ id, image, title, adopted }) => {
  return (
    <CardWrapper>
      <img
        src="https://www.hearingdogs.org.uk/globalassets/sponsor/gordon/sponsor-hearing-dog-puppy-gordon-1-600x377.jpg"
        alt={title}
      />
      <CardBody>
        <p>{title}</p>

        {!adopted && (
          <>
            <hr />
            <BButton
              type="button"
              onClick={() => console.log('Add pet in checkout: ', id, image)}
            >
              Adopt
            </BButton>
          </>
        )}
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
