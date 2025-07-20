export function isActiveLink(currentPath: string, href: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href) && href !== '/';
}
