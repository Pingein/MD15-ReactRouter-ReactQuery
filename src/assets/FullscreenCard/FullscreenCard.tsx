import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Data, Character, EpData } from '../interfaces'
import styles from './FullscreenCard.module.css'


interface FullscreenCardParams {
    id?: number | string
    data?: Character
}

const FullscreenCard = ({}:FullscreenCardParams) => {



    return (
        <div className={styles.fullscreen}>
            <div className={styles.backdrop}></div>

            <div className={styles.card}>
                <Link to='..'><div className={styles.closeBtn}></div></Link>

            </div>
        </div>

    )
}


export default FullscreenCard