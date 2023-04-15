import { useContext, useState } from 'react'
import UserContext from '../Context'
import './style.css'

function UserPage() {
    const { user } = useContext(UserContext)
    const [takeAway, setTakeAway] = useState(false)
    const [text, setText] = useState(`Hello ${user.Hello}!`)
    const [pText, setPText] = useState(
        `Choose any ${user.Choose} by pushing the button above.`
    )

    const takeAwayUser = () => {
        setTakeAway(!takeAway)
        setText(
            takeAway ? `Hello ${user.Hello}!` : `Hello take away ${user.Hello}!`
        )
        setPText(
            takeAway
                ? `Choose any ${user.Choose} by pushing the button above.`
                : `Choose any take away ${user.Choose} by pushing the button above.`
        )
    }

    return (
        <div className="hello">
            <h2>{text}</h2>
            <p>{pText}</p>
            <button onClick={takeAwayUser}>
                {takeAway ? 'Drink here' : 'Take away'}
            </button>
        </div>
    )
}

export default UserPage
