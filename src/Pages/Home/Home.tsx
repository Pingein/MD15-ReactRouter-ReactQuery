import styles from './Home.module.scss'


const Home = () => {
    return (
        <div className={styles.root}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="Rick & Morty logo" width={'800px'}/>
            <h1 className={styles.heading}>character and episode browser</h1>
            <p className={styles.paragraph}>In this page You can browse most of the characters and all episodes<br></br>from Rick and Morty serial</p>
        </div>
    )
}


export default Home