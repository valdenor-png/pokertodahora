import { useState } from 'react';
import { Button } from './Button';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubmit = (event) => { event.preventDefault(); setIsSubscribed(true); setEmail(''); };
  if (isSubscribed) return <div className="newsletter-success" role="status"><span>✓</span><h2>Você entrou na mesa.</h2><p>A próxima edição do pokertodahora chega no seu e-mail.</p><button type="button" onClick={() => setIsSubscribed(false)}>Cadastrar outro e-mail</button></div>;
  return <form className="newsletter-form" onSubmit={handleSubmit}><label htmlFor="newsletter-email">Seu e-mail</label><div><input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@email.com" autoComplete="email" required /><Button type="submit" variant="lime">Quero receber</Button></div><p>Uma edição semanal. Sem promessas de ganho, sem spam.</p></form>;
}
