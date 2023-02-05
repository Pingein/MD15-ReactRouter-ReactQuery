import React, { useState } from 'react'
import styles from './Episodes.module.css'

import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Data } from '../../assets/interfaces'
import axios from 'axios'

interface EpisodesParams {

}

const Episodes = ({}:EpisodesParams) => {
    const [currentPage, setCurrentPage] = useState(1)

    const postQueryEp = useQuery({
        queryKey: ["posts"],
        queryFn: () => axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`)
                            .then(res => res.data as Data)
    })

    if (postQueryEp.isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (postQueryEp.isError) {
        return <pre>{JSON.stringify(postQueryEp.error)}</pre>
    }

    return (
        <div>
            {/* {JSON.stringify(postQueryEp.data)} */}
            {postQueryEp.data.results.map((post) => {
                return <div key={post.id}>{post.name}</div>
            })}
        </div>
    )
}


export default Episodes