import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Data, Character, EpData, Episode } from '../interfaces'
import styles from './FullscreenCard.module.css'

import { numberToStringFormat } from '../helper'



const FullscreenEpisodeCard = () => {
    const { id } = useParams()
    
    const episodeQuery = useQuery({
        queryKey: ["episode"],
        queryFn: () => axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
                            .then(res => res.data as Episode)
    })

    if (episodeQuery.isLoading) {
        return (
            <div className={styles.fullscreen}>
                <div className={styles.backdrop}></div>
            </div>
        )
    }

    if (episodeQuery.isError) {
        return <h1>Error</h1>
    }

    const { name, air_date, episode, characters, created, url } = episodeQuery.data

    const [season, ep] = Array(episode.match(RegExp(/\d+/g)))

    // if (season && ep) {
    //     console.log(numberToStringFormat(season), numberToStringFormat(ep))
    // }
    
    return (
        <div className={styles.fullscreen}>
            <div className={styles.backdrop}></div>
            
            <div className={styles.card}>

                <div className={styles.leftSide}>
                    <h1 className={styles.name}>{name}</h1>
                    <p>{`${name} is the 'epN' episode in 'sN' season, it aired on ${air_date}, `}</p>
                </div>

                <div className={styles.rightSide}>
                    <Link to='..'><div className={styles.closeBtn}></div></Link>

                </div>

                
                
            </div>
            
        </div>

    )
}


export default FullscreenEpisodeCard