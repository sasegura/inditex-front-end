import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { screen, render, act } from '@testing-library/react';

import { EpisodeMock } from '../../utils/test/mocks';

import { TestWrapper } from '../../utils/test/test';
import EpisodeList from './episodeList';
import useEpisodeList from './useEpisodeList';
import { DateTransform, milliSecondsToTime } from '../../utils/utils';

const mockedUseEpisodeList = useEpisodeList as jest.Mock;

jest.mock('./useEpisodeList');

const episodes = EpisodeMock.results;

const counter = 10;
describe('Episode list', () => {
  beforeEach(async () => {
    act(() => {
      mockedUseEpisodeList.mockImplementation(() => ({
        hasErrorFetchingEpisode: false,
        counter: counter,
        isLoading: false,
        episodesList: episodes,
      }));
    });

    render(
      <TestWrapper>
        <EpisodeList />
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('show episode details', async () => {
    const summary = screen.getByText(`${episodes[1].trackName}`);
    const time = screen.getByText(
      `${milliSecondsToTime(episodes[1].trackTimeMillis)}`
    );
    const date = screen.getByText(`${DateTransform(episodes[1].releaseDate)}`);

    expect(summary).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  test('show episodes counter', async () => {
    const episodeCounter = screen.queryByText(`Episodes: ${counter}`);

    expect(episodeCounter).toBeInTheDocument();
  });
});
