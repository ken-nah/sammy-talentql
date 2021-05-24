import React from "react";
import styled from "styled-components";

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

const Shape = styled.div`
  background-color: var(--color-blue);
  border-radius: 50%;
  width: 10rem;
  height: 13rem;
`;

function Item() {
  return (
    <ShapeContainer>
      <Shape />
    </ShapeContainer>
  );
}

export default Item;
