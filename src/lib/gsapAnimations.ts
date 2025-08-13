import { gsap } from 'gsap';

export function revealCards(targets: Element[]){
  if(!targets.length) return;
  gsap.fromTo(
    targets,
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.04, ease: 'power2.out' }
  );
}

export function fadeIn(el: Element){
  gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 0.3, y: 0, duration: 0.6, ease: 'power2.out'});
}
