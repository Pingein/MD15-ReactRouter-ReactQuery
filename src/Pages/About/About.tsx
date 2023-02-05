import React, { useState } from 'react'
import styles from './About.module.css'

import Navigation, { links } from '../../assets/Navigation/Navigation'


interface AboutParams {

}

const About = ({}:AboutParams) => {
    return (
        <div>
            <Navigation links={links}/>
            About
        </div>
    )
}


export default About