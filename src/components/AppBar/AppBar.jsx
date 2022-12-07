import * as SC from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
  { href: 'favorite', text: 'Favorite' },
];
export const AppBar = () => {
  return (
    <SC.Header>
      <SC.Nav>
        <SC.Logo to="/">TMDB</SC.Logo>
        {navItems.map(({ href, text }) => (
          <SC.NavItem key={href} to={href}>
            {text}
          </SC.NavItem>
        ))}
      </SC.Nav>
    </SC.Header>
  );
};
