import styled from "styled-components";
import { colors, shapes } from "utils/data";

import Color from "./Color/Color";
import Heading from "./Heading/Heading";
import Item from "./Item/Item";
import Layout from "./Layout/Layout";
import MiniTitle from "./MiniTitle/MiniTitle";
import Shape from "./Shape/Shape";

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

const shapeItems = [1, 2, 3, 4, 5, 6, 7, 8];

function ShapeGrid() {
  return (
    <Layout>
      <Wrapper>
        <Heading title="Filters" />
        <MiniTitle title="Shapes" />
      </Wrapper>
      <Shapes>
        {shapes.map((shape) => (
          <Shape key={shape} shape={shape} />
        ))}
      </Shapes>
      <Wrapper>
        <MiniTitle title="Colors" />
        <Colors>
          {colors.map((color) => (
            <Color key={color} color={color} />
          ))}
        </Colors>
      </Wrapper>
      <Wrapper>
        <Heading title="All Oval Items" />
        <ShapeItems>
          {shapeItems.map((item) => (
            <Item key={item} />
          ))}
        </ShapeItems>
      </Wrapper>
    </Layout>
  );
}

export default ShapeGrid;
