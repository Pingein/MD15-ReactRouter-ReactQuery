import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'
import styles from './Characters.module.css'
import axios from 'axios'

import { Character, Data } from '../../assets/interfaces'

import Navigation, { links } from '../../assets/Navigation/Navigation'


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
                <Navigation links={links}/>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (postQuery.isError) {
        return <pre>{JSON.stringify(postQuery.error)}</pre>
    }

    return (
        <div>
            <Navigation links={links}/>
            {/* {JSON.stringify(postQuery.data)} */}
            {postQuery.data.results.map((post) => {
                return <div key={post.id}>{post.name}</div>
            })}
        </div>
    )
}


export default Characters