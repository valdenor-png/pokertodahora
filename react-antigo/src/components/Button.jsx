import { Icon } from './Icon';

export function Button({ children, href, onClick, variant = 'dark', className = '', type = 'button' }) {
  const content = <>{children}<Icon name="arrow" size={18} /></>;

  if (href) {
    return <a className={`button button--${variant} ${className}`} href={href}>{content}</a>;
  }

  return <button className={`button button--${variant} ${className}`} onClick={onClick} type={type}>{content}</button>;
}
