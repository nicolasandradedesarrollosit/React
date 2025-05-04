import './index.css';
import './App.css';
import { TwitterFollowCard } from './Twitter-Follow-Card.jsx'

export function App () {
    return (
        <div className="App">
            <TwitterFollowCard username="elonmusk" isFollowing = {true}>
                <strong>Elon Musk</strong>
            </TwitterFollowCard>

            <TwitterFollowCard username="cobratate" isFollowing = {false}>
                <strong>Andrew Tate</strong>
            </TwitterFollowCard>
        </div>
    )
}