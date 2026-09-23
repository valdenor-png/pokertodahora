import { useEffect, useState } from 'react';
import { ArticleCard } from './components/ArticleCard';
import { Button } from './components/Button';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Icon } from './components/Icon';
import { NewsletterForm } from './components/NewsletterForm';
import { SectionHeading } from './components/SectionHeading';
import {
  agendaItems,
  articles,
  categories,
  editorialPrinciples,
  storyNotes,
  strategyNotes,
} from './data/siteData';

const pageTitles = {
  '/': 'pokertodahora — o poker além da mão',
  '/noticias': 'Notícias — pokertodahora',
  '/estrategia': 'Estratégia — pokertodahora',
  '/historias': 'Histórias — pokertodahora',
  '/agenda': 'Agenda — pokertodahora',
  '/newsletter': 'Receber a edição — pokertodahora',
};

function readPath() {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path || '/';
}

function useRoute() {
  const [path, setPath] = useState(readPath);

  useEffect(() => {
    const updatePath = () => setPath(readPath());
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  function navigate(nextPath) {
    if (nextPath === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return [path, navigate];
}

function HomePage({ navigate }) {
  const [lead, ...latest] = articles;
  return <>
    <Hero navigate={navigate} />
    <section className="edition-rail"><div className="container"><span>nesta edição</span><p>O que muda quando os stacks encurtam <i>·</i> o ritual antes da sessão <i>·</i> histórias que só acontecem na mesa</p><span>role para ler</span></div></section>
    <section className="section news-section" id="destaques"><div className="container">
      <SectionHeading eyebrow="destaques da edição" title={<>Tem notícia, leitura<br />e conversa <i>na mesa.</i></>} text="Um recorte editorial para acompanhar o poker com mais repertório e menos barulho." />
      <div className="lead-layout"><ArticleCard article={lead} onOpen={(id) => navigate(`/artigos/${id}`)} featured /><div className="latest-stack">{latest.slice(0, 2).map((article) => <ArticleCard key={article.id} article={article} onOpen={(id) => navigate(`/artigos/${id}`)} />)}</div></div>
      <div className="section-action"><Button onClick={() => navigate('/noticias')} variant="outline">Ver todas as matérias</Button></div>
    </div></section>
    <section className="strategy-band"><div className="container strategy-band-grid"><div><p className="eyebrow eyebrow--light"><span />caderno de estratégia</p><h2>Decidir melhor<br />começa por <i>observar.</i></h2><p className="strategy-copy">Sem fórmula mágica: apenas conceitos, perguntas e métodos que ajudam a construir seu próprio jogo.</p><Button onClick={() => navigate('/estrategia')} variant="lime">Abrir caderno</Button></div><div className="strategy-list">{strategyNotes.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>
    <section className="section stories-section"><div className="container"><SectionHeading eyebrow="histórias de mesa" title={<>O poker continua<br />quando as fichas <i>param.</i></>} text="Encontros, personagens e memórias que fazem parte do jogo — mesmo sem aparecer no placar." /><div className="story-notes">{storyNotes.map((note, index) => <figure className={`story-note story-note--${index + 1}`} key={note.name}><span>“</span><blockquote>{note.quote}</blockquote><figcaption><b>{note.name}</b><small>{note.role}</small></figcaption></figure>)}</div><div className="section-action"><Button onClick={() => navigate('/historias')} variant="outline">Ler histórias</Button></div></div></section>
    <NewsletterBand navigate={navigate} />
  </>;
}

function NewsPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const displayedArticles = activeCategory === 'Todos' ? articles : articles.filter((article) => article.category === activeCategory);
  return <><PageIntro eyebrow="arquivo editorial" title={<>Notícias para quem<br />gosta de <i>ler o jogo.</i></>} text="Análises, cena, cultura e bastidores. Conteúdo demonstrativo, organizado por assunto." marker="01" /><section className="section article-index"><div className="container"><div className="filter-row" aria-label="Filtrar por categoria">{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}</div><p className="article-count">{displayedArticles.length} matérias nesta seleção</p><div className="article-grid">{displayedArticles.map((article) => <ArticleCard key={article.id} article={article} onOpen={(id) => navigate(`/artigos/${id}`)} />)}</div></div></section><NewsletterBand navigate={navigate} /></>;
}

function StrategyPage({ navigate }) {
  const strategyArticles = articles.filter((article) => article.category === 'Estratégia' || article.category === 'Online');
  return <><PageIntro eyebrow="caderno de estratégia" title={<>Menos certeza fácil.<br /><i>Mais boas perguntas.</i></>} text="Estratégia não é uma promessa de resultado. É a prática de observar melhor, estudar com calma e jogar dentro dos seus limites." marker="02" /><section className="section strategy-page"><div className="container"><div className="study-manifesto"><p className="eyebrow"><span />um ponto de partida</p><h2>Aprender é dar nome<br />ao que acontece <i>na mesa.</i></h2><p>Este caderno reúne princípios que ajudam a estruturar o estudo. Use como referência, nunca como resposta automática.</p></div><div className="strategy-list strategy-list--paper">{strategyNotes.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div><div className="article-grid article-grid--three">{strategyArticles.map((article) => <ArticleCard key={article.id} article={article} onOpen={(id) => navigate(`/artigos/${id}`)} />)}</div></div></section><ResponsiblePlay /></>;
}

function StoriesPage({ navigate }) {
  const stories = articles.filter((article) => article.category === 'Comunidade' || article.category === 'Cultura');
  return <><PageIntro eyebrow="histórias de mesa" title={<>O que fica<br />depois do <i>river.</i></>} text="Retratos e relatos que olham para o poker como cultura: encontros, conversas, estudo e a vida que atravessa uma mesa." marker="03" /><section className="section stories-page"><div className="container"><div className="stories-opening"><span className="opening-symbol">♣</span><p>Uma partida termina. A conversa sobre ela às vezes dura semanas. É nesse intervalo que o jogo encontra as pessoas.</p></div><div className="story-notes">{storyNotes.map((note, index) => <figure className={`story-note story-note--${index + 1}`} key={note.name}><span>“</span><blockquote>{note.quote}</blockquote><figcaption><b>{note.name}</b><small>{note.role}</small></figcaption></figure>)}</div><div className="article-grid article-grid--two">{stories.map((article) => <ArticleCard key={article.id} article={article} onOpen={(id) => navigate(`/artigos/${id}`)} />)}</div></div></section><NewsletterBand navigate={navigate} /></>;
}

function AgendaPage({ navigate }) {
  return <><PageIntro eyebrow="onde a conversa continua" title={<>Agenda para<br />marcar <i>na mesa.</i></>} text="Encontros editoriais e espaços de estudo do pokertodahora. Consulte cada edição antes de participar." marker="04" /><section className="section agenda-page"><div className="container"><div className="agenda-note"><Icon name="chip" size={34} /><p>Agenda de demonstração: transforme estes blocos nos eventos, transmissões ou campeonatos que seu portal acompanhar.</p></div><div className="agenda-list">{agendaItems.map((item) => <article key={item.title}><div><span className="agenda-date">{item.date}</span><span className="agenda-type">{item.type}</span></div><h2>{item.title}</h2><p>{item.place}</p><button type="button" onClick={() => navigate('/newsletter')}>Receber lembrete <Icon name="arrow" size={18} /></button></article>)}</div></div></section><NewsletterBand navigate={navigate} /></>;
}

function ArticlePage({ article, navigate }) {
  if (!article) return <NotFoundPage navigate={navigate} />;
  return <><article className={`article-page article-page--${article.tone}`}><div className="container"><button className="back-link" type="button" onClick={() => navigate('/noticias')}><Icon name="arrow" size={18} /> Todas as matérias</button><header className="article-header"><div className="article-page-icon"><Icon name={article.icon} size={46} /></div><p className="eyebrow"><span />{article.label}</p><div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span></div><h1>{article.title}</h1><p>{article.description}</p></header></div></article><section className="article-body"><div className="article-reading"><div className="reading-side"><span>pokertodahora</span><span>edição 01</span></div><div>{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<aside><Icon name="spade" size={22} /><p>O pokertodahora produz conteúdo editorial e educativo. Poker envolve risco: jogue somente se for legal na sua região e dentro de limites conscientes.</p></aside></div></div></section><section className="next-read"><div className="container"><p className="eyebrow eyebrow--light"><span />continue lendo</p><h2>O jogo não acaba<br />nesta <i>página.</i></h2><Button onClick={() => navigate('/noticias')} variant="lime">Voltar ao arquivo</Button></div></section></>;
}

function NewsletterPage() {
  return <section className="newsletter-page"><div className="container newsletter-page-grid"><div><p className="eyebrow"><span />a edição na sua caixa</p><h1>Uma pausa boa<br />para <i>ler o jogo.</i></h1><p>Receba uma seleção semanal de matérias, histórias e pontos de estudo. Nada de atalhos ou pressão para jogar.</p><div className="newsletter-pips"><Icon name="spade" size={28} /><Icon name="heart" size={28} /><Icon name="club" size={28} /><Icon name="diamond" size={28} /></div></div><NewsletterForm /></div></section>;
}

function ResponsiblePlay() {
  return <section className="responsible-play"><div className="container"><Icon name="heart" size={24} /><p><b>Jogo responsável.</b> Poker é entretenimento e envolve risco. Estabeleça limites de tempo e orçamento; nunca trate o conteúdo como garantia de resultado.</p></div></section>;
}

function NewsletterBand({ navigate }) {
  return <section className="newsletter-band"><div className="container"><p className="eyebrow eyebrow--light"><span />toda semana</p><h2>Uma edição para<br />chegar <i>na hora certa.</i></h2><Button onClick={() => navigate('/newsletter')} variant="lime">Receber a próxima</Button></div></section>;
}

function PageIntro({ eyebrow, title, text, marker }) {
  return <section className="page-intro"><div className="container"><p className="eyebrow"><span />{eyebrow}</p><h1>{title}</h1><p>{text}</p></div><span className="page-marker" aria-hidden="true">{marker}</span></section>;
}

function NotFoundPage({ navigate }) {
  return <section className="not-found"><div className="container"><p className="eyebrow"><span />página não encontrada</p><h1>Esta mesa<br />está <i>vazia.</i></h1><p>O caminho que você procurou não está mais no nosso arquivo.</p><Button onClick={() => navigate('/')} variant="dark">Voltar ao início</Button></div></section>;
}

function App() {
  const [path, navigate] = useRoute();
  const articleMatch = path.match(/^\/artigos\/([\w-]+)$/);
  const article = articleMatch ? articles.find((item) => item.id === articleMatch[1]) : null;

  useEffect(() => {
    document.title = article ? `${article.title} — pokertodahora` : (pageTitles[path] ?? 'Página não encontrada — pokertodahora');
  }, [article, path]);

  let page;
  if (path === '/') page = <HomePage navigate={navigate} />;
  else if (path === '/noticias') page = <NewsPage navigate={navigate} />;
  else if (path === '/estrategia') page = <StrategyPage navigate={navigate} />;
  else if (path === '/historias') page = <StoriesPage navigate={navigate} />;
  else if (path === '/agenda') page = <AgendaPage navigate={navigate} />;
  else if (path === '/newsletter') page = <NewsletterPage />;
  else if (articleMatch) page = <ArticlePage article={article} navigate={navigate} />;
  else page = <NotFoundPage navigate={navigate} />;

  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header currentPath={path} navigate={navigate} /><main id="conteudo">{page}</main><Footer navigate={navigate} /></>;
}

export default App;
