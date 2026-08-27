function ContentPage({ title, description, photo, className, children }) {
  return (
    <main id="main-content" tabIndex="-1" className={`${className} font-inter`}>
      {photo && (
        <img
          src={photo}
          alt="Portrait of Javier A. Núñez"
          className="avatar-photo"
        />
      )}
      <h1 className="heading">{title}</h1>
      <div className="divider-container">
        <hr className="divider" />
      </div>
      <div className="content-description">{description}</div>
      {children}
    </main>
  );
}

export default ContentPage;
