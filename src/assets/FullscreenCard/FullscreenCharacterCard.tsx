import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Character } from '../interfaces'
import styles from './FullscreenCard.module.scss'



const FullscreenCharacterCard = () => {
    const { characterId } = useParams()
    const pageRef = useRef<HTMLDivElement>(null)
    //const [episodes, setEpisodes] = useState<Episode[]>([])

    const characterQuery = useQuery({
        queryKey: ["character", {id:characterId}],
        queryFn: () => axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                            .then(res => res.data as Character)
    })

    if (characterQuery.isLoading) {
        return (
            <div className={styles.fullscreen}>
                <div className={styles.backdrop}></div>
            </div>
        )
    }
    if (characterQuery.isError) {
        return <h1>Error</h1>
    }

    const { created, episode, gender, image, location, 
            name, origin, species, status, type, url } = characterQuery.data
    
    return (
        <div ref={pageRef} className={styles.fullscreen}>
            <div className={styles.backdrop}></div>
            
            <div className={styles.card}>

                <div className={styles.leftSide}>
                    <img className={styles.image} src={image} alt={name} title={name} />
                    <h1 className={styles.name}>{name}</h1>
                    <span className={styles.text}>status: {status}</span>
                    <span className={styles.text}>species: {species}</span>
                    <span className={styles.text}>type: {type}</span>
                    <span className={styles.text}>gender: {gender}</span>
                    <span className={styles.text}>last location: {location.name}</span>
                    <span className={styles.text}>originated from: {origin.name}</span>
                </div>

                <div className={styles.rightSide}>
                    <Link to='..'><div className={styles.closeBtn}></div></Link>
                    <h2 className={styles.appearedIn}>Appears In:</h2>
                    <div className={styles.episodesContainer}>
                        {/* {episodes.map(ep => {
                            return <span key={ep.id}>{ep.name}</span>
                        })} */}
                        
                        {/* {episode.map(ep => {
                                let epId = ep.split('/').reverse()[0]

                                const epQuery = useQuery({
                                    queryKey: [`ep${epId}`, {id:epId}],
                                    queryFn: () => axios.get(`https://rickandmortyapi.com/api/episode/${epId}`)
                                                        .then(res => res.data as Episode)
                                })
                                
                                if (epQuery.isLoading) {
                                    return <span>Loading...</span>
                                }
                            
                                if (epQuery.isError) {
                                    return <h1>Error</h1>
                                }
                                
                                return <span key={epId}>{`\t${epQuery.data?.name}`}</span>
                            }
                        )} */}
                    </div>
                </div>
            </div>    
        </div>
    )
}


export default FullscreenCharacterCard