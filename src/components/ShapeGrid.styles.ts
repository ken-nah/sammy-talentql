import styled from 'styled-components';

const Shapes = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 10rem);
  column-gap: 3rem;
`;

const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(6, min-content);
  column-gap: 4rem;
`;

const ShapeItems = styled.div`
  display: grid;
  grid-template-columns: repeat(6, min-content);
  gap: 3rem;
`;

const Wrapper = styled.div`
  padding: 3rem 0;
`;

export { Colors, Shapes, ShapeItems, Wrapper };
