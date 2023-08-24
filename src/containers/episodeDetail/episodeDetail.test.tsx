import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { screen, render, act } from '@testing-library/react';

import { EpisodeMock } from '../../utils/test/mocks';

import { TestWrapper } from '../../utils/test/test';
import useEpisodeDetail from './useEpisodeDetail';
import EpisodeDetail from './episodeDetail';

const mockedUseEpisodeDetail = useEpisodeDetail as jest.Mock;

jest.mock('./useEpisodeDetail');

const episode = EpisodeMock.results[1];

const counter = 10;
describe('Episode Detail', () => {
  beforeEach(async () => {
    act(() => {
      mockedUseEpisodeDetail.mockImplementation(() => ({
        isLoading: false,
        hasErrorFetchingEpisode: false,
        episode: episode,
      }));
    });

    render(
      <TestWrapper>
        <EpisodeDetail />
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('show episode name', async () => {
    const name = screen.getByText(`${episode.trackName}`);

    expect(name).toBeInTheDocument();
  });
});
