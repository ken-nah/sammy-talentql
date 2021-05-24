import React from "react";
import styled from "styled-components";

type Props = {
  shape: string;
};

const StyledShape = styled.div`
  border: 1px solid var(--color-dark-gray);
  padding: .5rem 1rem;
  border-radius: 2rem;
  text-align: center;
`;

const Shape: React.FC<Props> = (props) => {
  return <StyledShape>{props.shape}</StyledShape>;
};

export default Shape;
