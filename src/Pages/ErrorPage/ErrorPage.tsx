import React, { useRef, useState } from 'react'
import { Link, useRouteError } from 'react-router-dom'
import styles from './ErrorPage.module.css'


const ErrorPage = () => {
    const [time, setTime] = useState(10)
    const homePageRef = useRef(null)

    let error = useRouteError()

    setTimeout(() => {
        setTime(time-1)
    }, 1000)

    return (
        <div>
            <h1>An Error has occurred</h1>
            <p>Redirecting to <Link ref={homePageRef} to='..'>Home</Link> page in {time} seconds</p>
        </div>
    )
}


export default ErrorPage