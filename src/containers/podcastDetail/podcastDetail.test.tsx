import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { screen, render, act } from '@testing-library/react';

import { PodcastsMock } from '../../utils/test/mocks';
import PodcastDetail from './podcastDetail';
import { TestWrapper } from '../../utils/test/test';
import usePodcastDetail from './usePodcastDetail';

const mockedUseGetPodcastsDetail = usePodcastDetail as jest.Mock;

jest.mock('./usePodcastDetail');
const mockHandleClick = jest.fn();

const podcast = {
  author: PodcastsMock[0]['im:artist'].label.toString(),
  imageUrl: PodcastsMock[0]['im:image'][2].label.toString(),
  title: PodcastsMock[0]['im:name'].label.toString(),
  description: PodcastsMock[0].summary.label.toString(),
};

const podcastId = PodcastsMock[0].id.attributes['im:id'];

describe('PodcastsList', () => {
  beforeEach(async () => {
    act(() => {
      mockedUseGetPodcastsDetail.mockImplementation(() => ({
        podcast: podcast,
        isLoading: false,
        onHandleCardClick: mockHandleClick,
      }));
    });

    render(
      <TestWrapper url={`/podcasts/${podcastId}`} path={'/podcasts/:podcastId'}>
        <PodcastDetail />
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('show podcast details', async () => {
    const summary = screen.queryByText(`${PodcastsMock[0].summary.label}`);
    const author = screen.queryByText(
      `by ${PodcastsMock[0]['im:artist'].label}`
    );
    const title = screen.queryByText(`${PodcastsMock[0]['im:name'].label}`);

    expect(summary).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('show episodes counter', async () => {
    const summary = screen.queryByText(`${PodcastsMock[0].summary.label}`);
    const author = screen.queryByText(
      `by ${PodcastsMock[0]['im:artist'].label}`
    );
    const title = screen.queryByText(`${PodcastsMock[0]['im:name'].label}`);

    expect(summary).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
