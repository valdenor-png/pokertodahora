import { Icon } from './Icon';

export function ArticleCard({ article, onOpen, featured = false }) {
  return <article className={`article-card article-card--${article.tone} ${featured ? 'article-card--featured' : ''}`}><div className="article-art" aria-hidden="true"><span className="article-index">{article.number}</span><Icon name={article.icon} size={featured ? 76 : 44} strokeWidth={1.3} /><span className="article-suit">PTH</span></div><div className="article-content"><div className="article-meta"><span>{article.category}</span><span>{article.readTime}</span></div><h3>{article.title}</h3><p>{article.description}</p><button className="article-link" type="button" onClick={() => onOpen(article.id)}>Ler matéria <Icon name="arrow" size={17} /></button></div></article>;
}
