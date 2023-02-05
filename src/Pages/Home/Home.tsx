import React, { useState } from 'react'
import styles from './Home.module.css'

import Navigation, { links } from '../../assets/Navigation/Navigation'


const Home = () => {

    return (
        <div>
            <Navigation links={links}/>
            <div>
                {/* {postQuery.data} */}
            </div>
        </div>
    )
}


export default Home