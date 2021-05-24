import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  active?: boolean;
  shape: string;
  onClick: () => void;
};

type ShapeProps = {
  active?: boolean;
};

const StyledShape = styled.div<ShapeProps>`
  border: 1px solid var(--color-dark-gray);
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  text-align: center;

  ${(props) =>
    props.active &&
    css`
      background-color: #dfe7fb;
    `}
`;

const ShapeItem: React.FC<Props> = (props) => {
  const { shape, active } = props;

  return (
    <StyledShape active={active} onClick={props.onClick}>
      {shape}
    </StyledShape>
  );
};

export default ShapeItem;
