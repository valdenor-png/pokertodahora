const paths = {
  arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  spade: <path d="M12 3c1.8 3.5 6.5 5.5 6.5 9.6A4.5 4.5 0 0 1 12 16.6a4.5 4.5 0 0 1-6.5-4C5.5 8.5 10.2 6.5 12 3Zm0 13.6L9.5 21h5L12 16.6Z" />,
  club: <path d="M12 11.5a3.5 3.5 0 1 0-3.3-4.7A3.5 3.5 0 1 0 7.8 13a3.5 3.5 0 1 0 8.4 0 3.5 3.5 0 1 0-.9-6.2A3.5 3.5 0 0 0 12 11.5ZM10 21l2-5 2 5h-4Z" />,
  heart: <path d="M12 20S4 15.5 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5c0 6-8 10.5-8 10.5Z" />,
  diamond: <path d="m12 3 6.5 9L12 21l-6.5-9L12 3Z" />,
  chip: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><path d="M12 3.5v3m0 11v3M3.5 12h3m11 0h3m-14-6 2.1 2.1m6.8 6.8 2.1 2.1m0-11-2.1 2.1m-6.8 6.8-2.1 2.1" /></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" /><path d="M8 7h2m-2 4h2" /></>,
  clock: <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3.4 2" /></>,
  check: <path d="m5 12 4.2 4L19 7" />,
  mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17 7h.01" /></>,
  linkedin: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6m0-9v.01M12 16v-3.4a2.6 2.6 0 0 1 5.2 0V16m-5.2-3.2V16" /></>,
};

export function Icon({ name, size = 24, strokeWidth = 1.7, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
