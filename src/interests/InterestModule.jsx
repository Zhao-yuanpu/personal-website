export function InterestModule({ item, children }) {
  return (
    <a className={`interest-module interest-module--${item.id}`} href={item.href} data-interest={item.id}>
      <img src={item.image} alt="" className="interest-image" />
      <div className="interest-shade" />
      <div className="interest-top">
        <h3>{item.title}</h3>
        <p>{item.label}</p>
      </div>
      {children}
      <div className="interest-bottom"><span>{item.label}</span><b aria-hidden="true">↗</b></div>
    </a>
  );
}
