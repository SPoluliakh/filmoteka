import * as SC from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];
export const AppBar = () => {
  return (
    <header>
      <nav>
        {navItems.map(({ href, text }) => (
          <SC.NavItem key={href} to={href}>
            {text}
          </SC.NavItem>
        ))}
      </nav>
    </header>
  );
};
