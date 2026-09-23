import { navigationItems } from '../data/siteData';
import { Icon } from './Icon';
import { Logo } from './Logo';

export function Footer({ navigate }) {
  const follow = (event, path) => { event.preventDefault(); navigate(path); };
  return <footer className="site-footer"><div className="container footer-main">
    <div className="footer-intro"><a href="/" onClick={(event) => follow(event, '/')}><Logo /></a><p>Notícias, estratégia e histórias para quem gosta de entender o poker além da mão.</p></div>
    <div className="footer-links"><p className="footer-label">Explorar</p>{navigationItems.map((item) => <a key={item.path} href={item.path} onClick={(event) => follow(event, item.path)}>{item.label}</a>)}</div>
    <div className="footer-contact"><p className="footer-label">Acompanhe</p><a href="/newsletter" onClick={(event) => follow(event, '/newsletter')}>Receba a edição semanal</a><p>Conteúdo editorial<br />e educativo</p><div className="socials"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={18} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a></div></div>
  </div><div className="container footer-base"><span>© 2026 pokertodahora</span><span>Jogue com consciência. 18+.</span></div></footer>;
}
