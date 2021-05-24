import React from 'react';
import styled, { css } from 'styled-components';
import { Shape } from 'utils/data';

type Props = {
  color: string;
  shape: Shape;
};

const ShapeContainer = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow-2);
  background-color: var(--color-white);
  width: 20rem;
  height: 20rem;
`;

const StyledShape = styled.div<Props>`
  background-color: ${(props) => props.color};
  width: 10rem;
  height: 10rem;

  ${(props) =>
    props.shape === 'Oval' &&
    css`
      height: 13rem;
      border-radius: 50%;
    `}

  ${(props) =>
    props.shape === 'Round' &&
    css`
      border-radius: 50%;
    `}

   ${(props) =>
    props.shape === 'Rectangle' &&
    css`
      width: 15rem;
    `}

  ${(props) =>
    props.shape === 'Triangle' &&
    css`
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    `}
`;

const Item: React.FC<Props> = (props) => {
  const { color, shape } = props;

  return (
    <ShapeContainer>
      <StyledShape color={color} shape={shape} />
    </ShapeContainer>
  );
};

export default Item;
