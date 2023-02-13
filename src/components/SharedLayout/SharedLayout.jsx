import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.outlet}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
