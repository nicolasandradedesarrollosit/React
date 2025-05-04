import './index.css';
import './App.css';
import { TwitterFollowCard } from './Twitter-Follow-Card.jsx'
import { useState } from 'react';


export function App () {
    const [name,setName] = useState(false)

    const text = name ? 'Andresito' : 'Andres';

    const nameChange = () => {
        setName(!name)
    }

    const leomessi = {
        username: 'lionelmessi',
        isFollowing: true
    }
    const cobratate = {
        username: 'cobratate',
        isFollowing: false
    }

    return (
        <div className="App">
            <TwitterFollowCard username={text} >
                <strong>Leo Messi</strong>
            </TwitterFollowCard>

            <TwitterFollowCard {...cobratate} >
                <strong>Andrew Tate</strong>
            </TwitterFollowCard>
            <button onClick={nameChange}>Cambio nombre</button>
        </div>
    )

    
}