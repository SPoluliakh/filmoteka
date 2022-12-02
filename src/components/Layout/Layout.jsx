import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'Utils/Box';
import { Outlet } from 'react-router-dom';
import { Footer } from 'components/Footer/Footer';
export const Layout = () => {
  return (
    <>
      <Box
        p="0 15px"
        minHeight="calc(100vh - 74px)"
        display="flex"
        flexDirection="column"
      >
        <AppBar />
        <Box flex="1 1 auto">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
