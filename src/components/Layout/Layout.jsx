import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'Utils/Box';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
import Spiner from '../Spiner/Spiner';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box className="content">
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </>
  );
};
