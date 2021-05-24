import React from 'react';
import { colors, generateShapes, Shape, shapes } from 'utils/data';

import Color from './Color/Color';
import Heading from './Heading/Heading';
import Item from './Item/Item';
import Layout from './Layout/Layout';
import MiniTitle from './MiniTitle/MiniTitle';
import ShapeItem from './ShapeItem/ShapeItem';
import { Colors, Shapes, ShapeItems, Wrapper } from './ShapeGrid.styles';

function ShapeGrid() {
  const [selectedShapes, setSelectedShapes] = React.useState<Shape[]>([]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);

  // shape filter handler
  const handleSelectedShape = (shape: Shape) => {
    if (selectedShapes.includes(shape)) {
      const newShapes = selectedShapes.filter(
        (currentShape) => currentShape !== shape
      );
      setSelectedShapes(newShapes);
    } else setSelectedShapes([...selectedShapes, shape]);
  };

  // color filter handler
  const handleSelectedColor = (color: string) => {
    if (selectedColors.includes(color)) {
      const newColors = selectedColors.filter(
        (currentColor) => color !== currentColor
      );
      setSelectedColors(newColors);
    } else setSelectedColors([...selectedColors, color]);
  };

  const renderShapes = () => {
    let shapes = generateShapes;

    if (selectedShapes.length !== 0) {
      shapes = generateShapes.filter((shape) =>
        selectedShapes.includes(shape.shape)
      );
    }
    if (selectedColors.length !== 0) {
      return shapes.filter((currentShape) =>
        selectedColors.includes(currentShape.color)
      );
    }

    return shapes;
  };

  return (
    <Layout>
      <Wrapper>
        <Heading title="Filters" />
        <MiniTitle title="Shapes" />
      </Wrapper>
      <Shapes>
        {shapes.map((shape) => {
          const noneSelected = selectedShapes.length === 0;
          const isSelected = selectedShapes.includes(shape) || noneSelected;

          return (
            <ShapeItem
              active={isSelected}
              key={shape}
              shape={shape}
              onClick={() => handleSelectedShape(shape)}
            />
          );
        })}
      </Shapes>
      <Wrapper>
        <MiniTitle title="Colors" />
        <Colors>
          {colors.map((color) => {
            const noneSelected = selectedColors.length === 0;
            const isSelected = selectedColors.includes(color) || noneSelected;

            return (
              <Color
                active={isSelected}
                key={color}
                color={color}
                onClick={() => handleSelectedColor(color)}
              />
            );
          })}
        </Colors>
      </Wrapper>
      <Wrapper>
        <Heading title="All Items" />
        {renderShapes().length === 0 ? (
          <h2>No shapes with current filters</h2>
        ) : (
          <ShapeItems>
            {renderShapes().map((shape) => (
              <Item key={shape.id} color={shape.color} shape={shape.shape} />
            ))}
          </ShapeItems>
        )}
      </Wrapper>
    </Layout>
  );
}

export default ShapeGrid;
