import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  finishingLoadingPage,
  restoreLoading,
} from '../store/reducers/rootSlice';
import { useLocation } from 'react-router-dom';

const usePageLoadFinished = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(finishingLoadingPage({}));
    return () => {
      dispatch(restoreLoading({}));
    };
  }, [location.pathname]);
};
export default usePageLoadFinished;
