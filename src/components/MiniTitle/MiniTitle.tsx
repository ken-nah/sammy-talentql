import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const StyledTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-blue);
  margin-bottom: 1rem;
`;

const MiniTitle: React.FC<Props> = (props) => {
  return <StyledTitle>{props.title}</StyledTitle>;
};

export default MiniTitle;
