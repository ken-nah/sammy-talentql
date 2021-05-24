import React from 'react';
import { colors, generateShapes, Shape, shapes } from 'utils/data';

import Color from './Color/Color';
import Heading from './Heading/Heading';
import Item from './Item/Item';
import Layout from './Layout/Layout';
import MiniTitle from './MiniTitle/MiniTitle';
import ShapeColor from './ShapeColor/ShapeColor';
import { Colors, Shapes, ShapeItems, Wrapper } from './ShapeGrid.styles';

function ShapeGrid() {
  const [selectedShapes, setSelectedShapes] = React.useState<Shape[]>([]);

  const handleSelectedShape = (shape: Shape) => {
    if (selectedShapes.includes(shape)) {
      const newShapes = selectedShapes.filter(
        (currentShape) => currentShape !== shape
      );
      setSelectedShapes(newShapes);
    } else setSelectedShapes([...selectedShapes, shape]);
  };

  const renderShapes = () => {
    if (selectedShapes.length !== 0) {
      const shapes = generateShapes.filter((shape) =>
        selectedShapes.includes(shape.shape)
      );
      return shapes;
    }
    return generateShapes;
  };

  return (
    <Layout>
      <Wrapper>
        <Heading title="Filters" />
        <MiniTitle title="Shapes" />
      </Wrapper>
      <Shapes>
        {shapes.map((shape) => (
          <ShapeColor
            key={shape}
            shape={shape}
            onClick={() => handleSelectedShape(shape)}
          />
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
        <Heading title="All Items" />
        <ShapeItems>
          {renderShapes().map((shape) => (
            <Item key={shape.id} color={shape.color} shape={shape.shape} />
          ))}
        </ShapeItems>
      </Wrapper>
    </Layout>
  );
}

export default ShapeGrid;
