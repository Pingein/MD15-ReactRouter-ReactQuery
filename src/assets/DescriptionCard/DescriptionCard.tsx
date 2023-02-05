import React, { useState } from 'react'
import styles from './DescriptionCard.module.css'


interface DescriptionCardParams {
    imgSrc: string
    imgAlt: string
    imgTitle: string

    cardClickHandler: React.MouseEventHandler<HTMLDivElement>
}

const DescriptionCard = ({imgSrc, imgAlt, imgTitle, cardClickHandler}:DescriptionCardParams) => {
    return (
        <div className={styles.card} onClick={cardClickHandler}>

            BRUH

            <div className={styles.card_imageContainer}>
                <img src={imgSrc} alt={imgAlt} title={imgTitle}/>
            </div>
            <div className={styles.card_descContainer}></div>
        </div>
    )
}


export default DescriptionCard