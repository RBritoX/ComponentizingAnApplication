import '../styles/content.scss';

interface ContentProps {
  title: string;
  children: any;
}

export function Content({ title, children }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">{children}</div>
      </main>
    </div>
  );
}
