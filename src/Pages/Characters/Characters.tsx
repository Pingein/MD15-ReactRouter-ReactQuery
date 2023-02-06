import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import styles from './Characters.module.css'
import axios from 'axios'

import { Data } from '../../assets/interfaces'
import DescriptionCard from '../../assets/DescriptionCard/DescriptionCard'
import Pagination from '../../assets/Pagination/Pagination'
import CardsSkeleton from '../../assets/CardsSkeleton/CardsSkeleton'
import { Outlet } from 'react-router-dom'


const Characters = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const characterQuery = useQuery({
        queryKey: ["characters", {page: currentPage}],
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
            <Outlet/>

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
                    // let statusColor:string
                    // if (character.status == 'Dead') {
                    //     statusColor = 'red'
                    // } else if (character.status == 'Alive') {
                    //     statusColor = 'green'
                    // } else {
                    //     statusColor = 'white'
                    // }
                    return <DescriptionCard key={character.id}
                                            imgSrc={character.image}
                                            imgAlt={character.name}
                                            imgTitle={character.name}
                                            title={character.name}
                                            info={`${character.status}`}
                                            description={`${character.name} is a ${character.species} ${character.gender} who originated from '${character.origin.name}' and was last seen on '${character.location.name}'`}
                                            linkTo={character.id+''}
                                            />
                })}
            </div>
        </section>
    )
}



export default Characters