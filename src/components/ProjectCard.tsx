type Props = {
  href: string;
  title: string;
  type: string;
  cover: string;
}

export default function ProjectCard({ href, title, type, cover }: Props) {
  return (
    <a className="card" href={href}>
      <img src={cover} alt={title} loading="lazy" />
      <div className="overlay" aria-hidden="true">
        <div className="meta">
          <span>{title}</span>
          <span>{type}</span>
        </div>
      </div>
    </a>
  );
}
