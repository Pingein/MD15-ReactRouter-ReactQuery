import { useQuery, QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import styles from './Characters.module.css'
import axios from 'axios'

import { Character, Data } from '../../assets/interfaces'
import DescriptionCard from '../../assets/DescriptionCard/DescriptionCard'
import Pagination from '../../assets/Pagination/Pagination'


interface CharactersParams {

}


const Characters = ({}:CharactersParams) => {
    const [currentPage, setCurrentPage] = useState(1)

    const characterQuery = useQuery({
        queryKey: ["character", {page: currentPage}],
        queryFn: () => axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
                            .then(res => res.data as Data)
    })

    
    if (characterQuery.isLoading) {
        return <h1 style={{color:"white", marginTop:"40px"}}>Loading...</h1>
    }

    if (characterQuery.isError) {
        return <pre>{JSON.stringify(characterQuery.error)}</pre>
    }

    return (
        <section className={styles.root}>
            <Pagination currentPage={currentPage}
                        pageCount={characterQuery.data.info.pages}
                        prevPageBtnHandler={(e) => {
                            if (currentPage != 1) {
                                setCurrentPage(currentPage-1)
                            }
                        }}
                        nextPageBtnHandler={(e) => { 
                            if (currentPage != characterQuery.data.info.pages) {
                                setCurrentPage(currentPage+1)
                            }
                        }}/>
            <div className={styles.cardContainer}>
                {characterQuery.data.results.map((character) => {
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