import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  active?: boolean;
  color: string;
  onClick: () => void;
};

const StyledColor = styled.div<Props>`
  border-radius: 50%;
  background-color: ${(props) => props.color};
  box-shadow: var(--box-shadow-2);
  cursor: pointer;
  height: 5rem;
  width: 5rem;

  ${(props) =>
    props.active &&
    css`
      border: 2px solid var(--color-blue);
    `}
`;

const Color: React.FC<Props> = (props) => {
  const { active, color } = props;

  return <StyledColor active={active} color={color} onClick={props.onClick} />;
};

export default Color;
