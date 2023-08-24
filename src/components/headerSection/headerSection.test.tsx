import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';
import HeaderSection from './headerSection';

describe('Header', () => {
  test('Show the Podcaster title', async () => {
    render(
      <TestWrapper>
        <HeaderSection isLoading={false} />
      </TestWrapper>
    );
    const titleElement = screen.getByText('Podcaster');
    expect(titleElement).toBeInTheDocument();
  });
});
