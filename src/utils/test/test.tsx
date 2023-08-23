import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from '../../store';

export const TestWrapper = ({
  children,
  url = '/',
  path = '*',
}: {
  children: React.ReactNode;
  url?: string;
  path?: string;
}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MemoryRouter initialEntries={[url]}>
          <Routes>
            <Route path={path} element={children} />
          </Routes>
        </MemoryRouter>
      </PersistGate>
    </Provider>
  );
};
