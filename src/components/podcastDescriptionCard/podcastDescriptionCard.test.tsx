import { render, screen } from '@testing-library/react';
import { TestWrapper } from '../../utils/test/test';

import { PodcastsMock } from '../../utils/test/mocks';
import PodcastDescriptionCard from './podcastDescriptionCard';

const podcast = {
  author: PodcastsMock[0]['im:artist'].label.toString(),
  imageUrl: PodcastsMock[0]['im:image'][2].label.toString(),
  title: PodcastsMock[0]['im:name'].label.toString(),
  description: PodcastsMock[0].summary.label.toString(),
};

describe('Filter Input', () => {
  const handleClick = () => {
    return;
  };

  test('show the filter input value', async () => {
    render(
      <TestWrapper>
        <PodcastDescriptionCard
          podcast={podcast}
          onHandleCardClick={handleClick}
        />
      </TestWrapper>
    );

    const title = screen.getByText(PodcastsMock[0]['im:name'].label.toString());
    const authorTest = screen.getByText(
      `by ${PodcastsMock[0]['im:artist'].label.toString()}`
    );
    const description = screen.getByText(
      `${PodcastsMock[0].summary.label.toString()}`
    );

    const image = screen.getByAltText('imageTitle');

    expect(image).toHaveAttribute(
      'src',
      PodcastsMock[0]['im:image'][2].label.toString()
    );

    expect(title).toBeInTheDocument();
    expect(authorTest).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
