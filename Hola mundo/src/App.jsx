import './index.css';
import './App.css';
import { TwitterFollowCard } from './Twitter-Follow-Card.jsx';

export function App () {
  const leomessi = {
    username: 'lionelmessi',
    initialIsFollowing: true
  };
  
  const cobratate = {
    username: 'cobratate',
    initialIsFollowing: false
  };

  return (
    <div className="App">
      <TwitterFollowCard {...leomessi}>
        <strong>Leo Messi</strong>
      </TwitterFollowCard>

      <TwitterFollowCard {...cobratate}>
        <strong>Andrew Tate</strong>
      </TwitterFollowCard>
    </div>
  );
}
