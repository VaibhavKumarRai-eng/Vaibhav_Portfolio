'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle(){const {theme,setTheme}=useTheme();const [mounted,setMounted]=useState(false);useEffect(()=>setMounted(true),[]);const nextTheme=mounted&&theme==='dark'?'light':'dark';return <button type="button" aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`} onClick={()=>setTheme(nextTheme)} className="glass-button theme-toggle"><Sun aria-hidden="true" className="hidden h-4 w-4 dark:block"/><Moon aria-hidden="true" className="h-4 w-4 dark:hidden"/></button>}
