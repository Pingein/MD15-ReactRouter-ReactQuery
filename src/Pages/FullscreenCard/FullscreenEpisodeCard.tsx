import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Episode } from '../../assets/interfaces'
import styles from './FullscreenCard.module.scss'

import { numberToStringFormat } from '../../assets/helper'


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

    let season = parseInt(episode.slice(1,3))
    let ep = parseInt(episode.slice(4,6))

    return (
        <div className={styles.fullscreen}>
            <div className={styles.backdrop}></div>
            <div className={styles.card}>

                <div className={styles.leftSide}>
                    <h1 className={styles.name}>{name}</h1>
                    <p>{`${name} is the ${numberToStringFormat(ep)} episode in ${numberToStringFormat(season)} season, it aired on ${air_date}`}</p>
                </div>

                <div className={styles.rightSide}>
                    <Link to='..'><div className={styles.closeBtn}></div></Link>
                    <h1>Characters in {name}:</h1>
                    <div className={styles.characterContainer}>

                    </div>
                </div>
            </div> 
        </div>
    )
}


export default FullscreenEpisodeCard