import React, { useState } from 'react'
import styles from './DescriptionCard.module.css'


interface DescriptionCardParams {
    imgSrc: string
    imgAlt?: string
    imgTitle?: string

    Title: string


    cardClickHandler: React.MouseEventHandler<HTMLDivElement>
}

const DescriptionCard = ({imgSrc, imgAlt, imgTitle, Title, cardClickHandler}:DescriptionCardParams) => {
    return (
        <div className={styles.card} onClick={cardClickHandler}>
            <div className={styles.card_imageContainer}>
                <img src={imgSrc} alt={imgAlt} title={imgTitle}/>
            </div>
            <div className={styles.card_descContainer}>
                <h1 className={styles.card_title}>
                    {Title}
                </h1>
            </div>
        </div>
    )
}


export default DescriptionCard