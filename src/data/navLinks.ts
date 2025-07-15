export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/apps',
    label: 'Apps',
    children: [
      { href: '/stoic', label: 'Stoic App' },
      { href: '/test', label: 'Test App' },
    ],
  },
  { href: '/contact', label: 'Contact' },
];
