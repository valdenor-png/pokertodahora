export function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}
