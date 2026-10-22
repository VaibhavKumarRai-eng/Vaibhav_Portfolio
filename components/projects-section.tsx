'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/content/projects';
import { ProjectCard } from './project-card';

const filters=['All','AI / ML','Generative AI','Backend','Data','Full Stack','Automation'] as const;
export function ProjectsSection(){const [active,setActive]=useState<typeof filters[number]>('All');const visible=active==='All'?projects:projects.filter(p=>p.category===active);return <section id="projects" className="section border-y border-[var(--line)] bg-black/10"><div className="container"><div className="section-heading"><div><p className="eyebrow">03 / SELECTED PROJECTS</p><h2 className="section-title mt-4">Ideas made tangible.</h2></div><p className="text-sm leading-6 text-[var(--muted)]">A selection of project work and concepts from my current portfolio.</p></div><div role="toolbar" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">{filters.map(f=><button key={f} onClick={()=>setActive(f)} className={`glass-button py-2 ${active===f?'!border-[var(--signal)] !text-[var(--signal)]':''}`}>{f}</button>)}</div><motion.div layout className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3"><AnimatePresence mode="popLayout">{visible.map(p=><ProjectCard key={p.slug} project={p}/>)}</AnimatePresence></motion.div></div></section>}
