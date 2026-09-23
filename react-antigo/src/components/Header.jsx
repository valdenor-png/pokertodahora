import { useState } from 'react';
import { navigationItems } from '../data/siteData';
import { Icon } from './Icon';
import { Logo } from './Logo';

export function Header({ currentPath, navigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectPath = (event, path) => { event.preventDefault(); setIsOpen(false); navigate(path); };
  const activeItem = (path) => currentPath === path || (path === '/noticias' && currentPath.startsWith('/artigos/'));

  return <header className="site-header"><div className="header-inner container">
    <a className="logo-link" href="/" onClick={(event) => selectPath(event, '/')}><Logo /></a>
    <nav className={`main-nav ${isOpen ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
      {navigationItems.map((item) => <a key={item.path} className={activeItem(item.path) ? 'active' : ''} href={item.path} onClick={(event) => selectPath(event, item.path)}>{item.label}</a>)}
      <a className="nav-contact" href="/newsletter" onClick={(event) => selectPath(event, '/newsletter')}>Receber a edição <Icon name="arrow" size={16} /></a>
    </nav>
    <button className="menu-toggle" type="button" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}><Icon name={isOpen ? 'close' : 'menu'} size={25} /></button>
  </div></header>;
}
