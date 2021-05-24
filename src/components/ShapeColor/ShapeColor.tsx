import React from 'react';
import styled from 'styled-components';

type Props = {
  shape: string;
  onClick: () => void;
};

const StyledShape = styled.div`
  border: 1px solid var(--color-dark-gray);
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  text-align: center;
`;

const ShapeColor: React.FC<Props> = (props) => {
  return <StyledShape onClick={props.onClick}>{props.shape}</StyledShape>;
};

export default ShapeColor;
