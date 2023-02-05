import React, { useState } from 'react'
import styles from './DescriptionCard.module.css'


interface DescriptionCardParams {
    imgSrc?: string
    imgAlt?: string
    imgTitle?: string

    title?: string
    info?: string
    description?: string

    key?: number | string

    cardClickHandler?: React.MouseEventHandler<HTMLDivElement>
}

const DescriptionCard = ({imgSrc, imgAlt, imgTitle, title, info, description, cardClickHandler}:DescriptionCardParams) => {
    return (
        <div className={styles.card} 
             style={cardClickHandler 
                    ? { cursor: "pointer" }
                    : { cursor: "arrow" }
                    }
             onClick={cardClickHandler}>
            <div className={styles.card_imageContainer}>
                <img src={imgSrc} alt={imgAlt} title={imgTitle}/>
            </div>
            <div className={styles.card_descContainer}>
                <h1 className={styles.card_title}>
                    {title}
                </h1>
                <span>{info}</span>
                <span>{description}</span>
            </div>
        </div>
    )
}


export default DescriptionCard