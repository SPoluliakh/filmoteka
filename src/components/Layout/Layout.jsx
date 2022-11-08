import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <Box p="0 15px">
      {<AppBar />}
      <Outlet />
    </Box>
  );
};
