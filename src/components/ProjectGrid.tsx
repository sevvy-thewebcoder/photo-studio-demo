import { useEffect, useMemo, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { useStore } from '@nanostores/react';
import { activeFilter } from '../lib/stores';
import { revealCards } from '../lib/gsapAnimations';

type Project = {
  id: string;
  data: {
    title: string;
    type: 'fashion' | 'portrait' | 'body-swim';
    coverImage: string;
  }
};

type Props = { projects: Project[] };

export default function ProjectGrid({ projects }: Props){
  const filter = useStore(activeFilter);
  const containerRef = useRef<HTMLDivElement>(null);

  const list = useMemo(() => {
    if(filter === 'all') return projects;
    return projects.filter(p => p.data.type === filter);
  }, [filter, projects]);

  useEffect(() => {
    const cards = Array.from(containerRef.current?.querySelectorAll('.card') ?? []);
    revealCards(cards);
  }, [list]);

  return (
    <div ref={containerRef} className="grid">
      {list.map(({ data, id }) => (
        <ProjectCard
          key={id}
          href={`/projects/${id}`}
          title={data.title}
          type={data.type}
          cover={data.coverImage}
        />
      ))}
    </div>
  );
}
