function ContentPage({ title, description, className, children }) {
  return (
    <main className={`${className} font-jb`}>
      <h2 className="heading">{title}</h2>
      <hr className="divider" />
      <p className="content-description">{description}</p>
      {children}
    </main>
  );
}

export default ContentPage;
