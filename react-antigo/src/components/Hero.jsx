import { Button } from './Button';
import { Icon } from './Icon';

function HeroTable() {
  return <div className="hero-table" aria-hidden="true"><div className="table-felt"><span className="felt-caption">Edição<br />01</span><span className="felt-pip">♠</span><span className="felt-pip felt-pip--two">♣</span></div><div className="hero-card hero-card--one"><b>A</b><Icon name="spade" size={24} /><span>A</span></div><div className="hero-card hero-card--two"><b>Q</b><Icon name="heart" size={24} /><span>Q</span></div><div className="hero-chip"><span>PTH</span></div><div className="hero-table-note"><span>na mesa</span><b>toda jogada<br />tem contexto.</b></div></div>;
}

export function Hero({ navigate }) {
  return <section className="hero"><div className="hero-grain" /><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow eyebrow--light"><span />caderno de poker · edição 01</p><h1>O jogo é maior<br />que <i>a mão.</i></h1><p className="hero-text">Notícias, estratégia e histórias para quem quer ler melhor o que acontece dentro — e ao redor — da mesa.</p><div className="hero-actions"><Button onClick={() => navigate('/noticias')} variant="lime">Ler a edição</Button><a href="#destaques" className="text-link">Ver destaques <Icon name="arrow" size={18} /></a></div><div className="hero-footnote"><span className="pulse" />Conteúdo editorial e educativo. Jogue com consciência.</div></div><HeroTable /></div></section>;
}
