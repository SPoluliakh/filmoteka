import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'Utils/Box';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box className="content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </>
  );
};
