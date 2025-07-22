import { NavChild, NavLink } from '@/types/nav';

export function isActiveLink(currentPath: string, href: string): boolean {
  if (href === '/') return currentPath === '/';
  return (
    (currentPath === href || currentPath.startsWith(href + '/')) && href !== '/'
  );
}

export function isAnyChildActive(link: NavLink, pathname: string): boolean {
  return (
    link.children?.some((child: NavChild) =>
      isActiveLink(pathname, child.href),
    ) ?? false
  );
}
