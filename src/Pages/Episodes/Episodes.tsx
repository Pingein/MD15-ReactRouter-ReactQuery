import React, { useState } from 'react'
import styles from './Episodes.module.css'

import { EpData } from '../../assets/interfaces'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Pagination from '../../assets/Pagination/Pagination'
import DescriptionCard from '../../assets/DescriptionCard/DescriptionCard'
import CardsSkeleton from '../../assets/CardsSkeleton/CardsSkeleton'
import { Outlet } from 'react-router-dom'


const Episodes = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const characterQuery = useQuery({
        queryKey: ["episodes", {page: currentPage}],
        queryFn: () => axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
                            .then(res => res.data as EpData)
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
                {characterQuery.data.results.map((episode) => {
                    return <DescriptionCard key={episode.id}
                                            title={episode.name}
                                            info={episode.episode}
                                            description={`Launched on: ${episode.air_date}`}
                                            linkTo={episode.id+''}
                                            //description={`originated from ${episode.origin.name}`}
                                            />
                })}
            </div>
        </section>
    )
}


export default Episodes