import React from "react";
import styled from "styled-components";

type Props = {
  color: string;
};

const StyledColor = styled.div<Props>`
  border: 2px solid var(--color-blue);
  border-radius: 50%;
  background-color: ${(props) => props.color};
  box-shadow: var(--box-shadow-2);
  height: 5rem;
  width: 5rem;
`;

const Color: React.FC<Props> = (props) => {
  return <StyledColor color={props.color} />;
};

export default Color;
