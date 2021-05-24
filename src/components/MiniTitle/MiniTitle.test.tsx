import { render, screen } from '@testing-library/react';

import MiniTitle from './MiniTitle';

describe('<MiniTitle />', () => {
  const title = 'test title';
  render(<MiniTitle title={title} />);

  it('renders the <MiniTitle /> component correctly', () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
