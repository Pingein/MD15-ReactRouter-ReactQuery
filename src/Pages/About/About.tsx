import styles from './About.module.scss'


const About = () => {
    return (
        <div className={styles.root}>
            <span className={styles.madeBy}>
                <span className={styles.bold}>Made by:</span> Kristofers Prancitis<br></br>
            </span>
            <span className={styles.usedLinks}>
                Links to used APIs:
                <br></br>
                <a href="https://rickandmortyapi.com/api/character/" 
                   className={styles.link}>
                    https://rickandmortyapi.com/api/character/
                </a>
                <br></br>
                <a href="https://rickandmortyapi.com/api/episode/" 
                   className={styles.link}>
                    https://rickandmortyapi.com/api/episode/
                </a>  
            </span>
            <span className={styles.more}>
                More about Rick and Morty API:
                <br></br>
                <a href="https://rickandmortyapi.com/" 
                   className={styles.link}>
                    https://rickandmortyapi.com/
                </a>  
            </span>
        </div>
    )
}


export default About