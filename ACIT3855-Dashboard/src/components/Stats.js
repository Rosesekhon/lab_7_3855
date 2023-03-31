import { useEffect, useState, useRef } from 'react'

const Stats = () => {
    const [event, setEvent] = useState([]) 

    useEffect(() => {
        fetch('http://localhost:8100/stats')
        .then(res => res.json())
        .then(res => { 
            setEvent(res) 
        })
    }, [])

    // this is where you will add content 
    return (
        <div className="stats">
            <h2>Latest Statistics</h2>
            <div>
                <p>Maximum buy price ${event.max_buy_price}</p>
                
            </div>
        </div>
    )   
}

export default Stats

// useState = hook    useEffect hook = run something asynchronously 
// need to install: pip install flask-cors
// 1. app.py - 