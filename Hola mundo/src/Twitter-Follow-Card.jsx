import { useState } from "react";
import './App.css';

export function TwitterFollowCard ({children, username, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'btn-follow is-following' : 'btn-follow';
  const imageSrc = `https://unavatar.io/${username}`;

  const followClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="card-follow">
      <header className="card-follow-header">
        <img className="avatar-follow" src={imageSrc} alt="foto perfil" />
        <div className="card-follow-header-div">
          <strong className="card-follow-header-name">{children}</strong>
          <span className="card-follow-header-info">
            <strong>@{username}</strong>
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={followClick}>
          <span className="btn-text">{text}</span>
          <span className="stop-follow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

  
