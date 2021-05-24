import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const StyledHeading = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Heading: React.FC<Props> = (props) => {
  return <StyledHeading>{props.title}</StyledHeading>;
};

export default Heading;
