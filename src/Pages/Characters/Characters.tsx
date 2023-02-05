import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import styles from './Characters.module.css'
import axios from 'axios'

import { Character, Data } from '../../assets/interfaces'
import DescriptionCard from '../../assets/DescriptionCard/DescriptionCard'
import Pagination from '../../assets/Pagination/Pagination'
import CardsSkeleton from '../../assets/CardsSkeleton/CardsSkeleton'
import { Outlet, useOutletContext } from 'react-router-dom'


interface CharactersParams {

} 


const Characters = ({}:CharactersParams) => {
    const [currentPage, setCurrentPage] = useState(1)

    const [context, setContext] = useState<Character>();

    const characterQuery = useQuery({
        queryKey: ["character", {page: currentPage}],
        queryFn: () => axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
                            .then(res => res.data as Data)
    })

    
    if (characterQuery.isLoading) {
        return <CardsSkeleton/>
    }

    if (characterQuery.isError) {
        return <pre>{JSON.stringify(characterQuery.error)}</pre>
    }

    return (
        <section className={styles.root}>
            <Outlet context={{data:characterQuery.data.results}}/>

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
                                            linkTo={character.id+''}
                                            //description={`originated from ${character.origin.name}`}
                                            cardClickHandler = {(e) => {
                                                setContext(character)
                                            }}
                                            />
                })}
            </div>
        </section>
    )
}



export default Characters