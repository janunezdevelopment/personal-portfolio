function ContentPage({ title, description, photo, className, children }) {
  return (
    <main className={`${className} font-jb`}>
      {photo && (
        <img
          src={photo}
          alt="Portrait of Javier A. Núñez"
          className="avatar-photo"
        />
      )}
      <h2 className="heading">{title}</h2>
      <div className="divider-container">
        <hr className="divider" />
      </div>
      <p className="content-description">{description}</p>
      {children}
    </main>
  );
}

export default ContentPage;
