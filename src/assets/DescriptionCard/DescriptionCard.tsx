import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './DescriptionCard.module.css'


interface DescriptionCardParams {
    imgSrc?: string
    imgAlt?: string
    imgTitle?: string

    title?: string
    info?: string
    description?: string
    
    linkTo?: string

    key?: number | string

    cardClickHandler?: React.MouseEventHandler<HTMLDivElement>
}

const CardImage = ({imgSrc, imgAlt, imgTitle}:DescriptionCardParams) => {
    return (
        <div className={styles.card_imageContainer}>
            <img src={imgSrc} alt={imgAlt} title={imgTitle}/>
        </div>
    )
}

const DescriptionCard = ({imgSrc, imgAlt, imgTitle, title, info, description, linkTo, cardClickHandler}:DescriptionCardParams) => {
    return (
        <Link to={`${linkTo}`} className={styles.link}>
            <div className={styles.card} 
                style={cardClickHandler 
                        ? { cursor: "pointer" }
                        : { cursor: "arrow" }
                        }
                onClick={cardClickHandler}>
                {imgSrc 
                 ? <CardImage imgSrc={imgSrc} imgAlt={imgAlt} imgTitle={imgTitle}/>
                 : null}
                <div className={styles.card_descContainer}>
                    <h1 className={styles.card_title}>
                        {title}
                    </h1>
                    <span className={styles.card_info}>{info}</span>
                    <span>{description}</span>
                </div>
            </div>
        </Link>
    )
}


export default DescriptionCard