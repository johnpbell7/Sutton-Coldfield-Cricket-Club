import { MouseEvent, ReactNode, forwardRef } from "react";
import { appPath, currentAppPath, href } from "@/app/routing";

interface CustomLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ to, children, className, onClick }, ref) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      // Leave the browser to handle opening in a new tab or window.
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      (window as any).navigateTo(to);
      if (onClick) onClick();
    };

    return (
      <a ref={ref} href={href(to)} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }
);

CustomLink.displayName = "CustomLink";

// Custom useNavigate hook
export function useNavigate() {
  return (path: string) => {
    (window as any).navigateTo(path);
  };
}

// Custom useParams hook
export function useParams<T = any>(): T {
  const path = currentAppPath();
  const parts = path.split('/');

  // For /decades/:year pattern
  if (path.startsWith('/decades/')) {
    return { year: parts[2] } as T;
  }

  return {} as T;
}

// Custom useLocation hook
export function useLocation() {
  return {
    pathname: appPath(window.location.pathname),
    search: window.location.search,
    hash: window.location.hash,
  };
}

// Export as Link for compatibility
export const Link = CustomLink;
