import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
import styles from './Characters.module.css'
import axios from 'axios'

import { Character, Data } from '../../assets/interfaces'
import DescriptionCard from '../../assets/DescriptionCard/DescriptionCard'
import Pagination from '../../assets/Pagination/Pagination'


interface CharactersParams {

}

const Characters = ({}:CharactersParams) => {

    const [currentPage, setCurrentPage] = useState(1)

    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
                            .then(res => res.data as Data)
    })

    if (postQuery.isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (postQuery.isError) {
        return <pre>{JSON.stringify(postQuery.error)}</pre>
    }

    return (
        <section className={styles.root}>
            <Pagination currentPage={currentPage}
                        pageCount={10}
                        prevPageBtnHandler={(e) => {
                            
                        }}
                        nextPageBtnHandler={(e) => {
                            
                        }}/>
            <div className={styles.cardContainer}>
                {postQuery.data.results.map((character) => {
                    return <DescriptionCard key={character.id}
                                            imgSrc={character.image}
                                            imgAlt={character.name}
                                            imgTitle={character.name}
                                            title={character.name}
                                            info={`${character.species} ${character.gender} - ${character.status}`}
                                            //description={`originated from ${character.origin.name}`}

                                            cardClickHandler={(e) => {
                                            
                                            }}/>
                })}
            </div>
        </section>
    )
}


export default Characters