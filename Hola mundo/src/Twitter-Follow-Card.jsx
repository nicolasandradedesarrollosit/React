export function TwitterFollowCard ({children, username, isFollowing}) {
  const imageSrc = `https://unavatar.io/${username}`;
    return (
      <article className="card-follow">
        <header className="card-follow-header">
          <img className="avatar-follow" src= {imageSrc} alt="foto perfil" />
          <div className="card-follow-header-div">
            <strong className="card-follow-header-name">
            {children}
            </strong>
            <span className="card-follow-header-info">
              <strong>@{username}</strong>
            </span>
          </div>
        </header>
        <aside>
          <button className="btn-follow">
            Seguir
          </button>
        </aside>
      </article>
    );
  }
  
