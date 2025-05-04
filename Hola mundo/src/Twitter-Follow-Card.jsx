import { useState } from "react";
export function TwitterFollowCard ({children, username}) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  const buttonClassName = isFollowing ? 'btn-follow is-following' : 'btn-follow';

  const imageSrc = `https://unavatar.io/${username}`;

  const followClick = () => {
    setIsFollowing(!isFollowing);
  }
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
          <button className={buttonClassName} onClick={followClick}>
            {text}
          </button>
        </aside>
      </article>
    );
}
  
