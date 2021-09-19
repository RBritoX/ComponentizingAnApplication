import '../styles/sidebar.scss';

interface SidebarProps {
  children: any;
}

export function SideBar({ children }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">{children}</div>
    </nav>
  );
}
