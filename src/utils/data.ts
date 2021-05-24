import { build, oneOf, fake } from '@jackfranklin/test-data-bot';

export type ShapeItem = {
  id: string;
  shape: Shape;
  color: string;
};

export type Shape = typeof shapes[number];

const shapes = ['Oval', 'Round', 'Triangle', 'Square', 'Rectangle'] as const;

const colors = ['#F22E2E', '#0D05F2', '#078C03', '#F2E205', '#808080'];

const buildShape = build({
  fields: {
    id: fake((f) => f.random.uuid()),
    shape: oneOf(...shapes),
    color: oneOf(...colors),
  },
});

const emptyShapeArray = Array(20).fill(0);

const generateShapes = emptyShapeArray.map(() => buildShape() as ShapeItem);

export { shapes, colors, generateShapes };
