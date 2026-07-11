function ContentPage({ title, description, className, children }) {
  return (
    <main className={className}>
      <h2 className="heading">{title}</h2>
      <hr className="divider" />
      <p>{description}</p>
      {children}
    </main>
  );
}

export default ContentPage;
