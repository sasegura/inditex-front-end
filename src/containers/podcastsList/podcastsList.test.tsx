import { screen, render, act } from '@testing-library/react';
import PodcastsList from './podcastsList';
import { TestWrapper } from '../../utils/test/test';
import { PodcastsMock } from '../../utils/test/mocks';
import usePodcastList from './usePodcastsList';

const mockedUseGetPodcasts = usePodcastList as jest.Mock;

jest.mock('./usePodcastsList');
const mockHandleClick = jest.fn();

describe('PodcastsList', () => {
  beforeEach(() => {
    act(() => {
      mockedUseGetPodcasts.mockImplementation(() => ({
        filteredPodcast: PodcastsMock,
        isLoading: false,
        onHandleClick: mockHandleClick,
      }));
    });

    render(
      <TestWrapper>
        <PodcastsList />
      </TestWrapper>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('show podcasts cards', () => {
    expect(
      screen.getByText(`Author: ${PodcastsMock[0]['im:artist'].label}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Author: ${PodcastsMock[1]['im:artist'].label}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Author: ${PodcastsMock[2]['im:artist'].label}`)
    ).toBeInTheDocument();
  });
});
