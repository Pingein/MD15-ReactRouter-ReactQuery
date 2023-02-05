import React, { useState, useRef } from 'react'
import styles from './Pagination.module.css'


interface PaginationParams {
    currentPage: string | number
    pageCount: string | number

    prevPageBtnHandler: React.MouseEventHandler<HTMLDivElement>
    nextPageBtnHandler: React.MouseEventHandler<HTMLDivElement>
}

const Pagination = ({currentPage, pageCount, prevPageBtnHandler, nextPageBtnHandler }:PaginationParams) => {
    
    const prevButtonRef = useRef<HTMLDivElement>()
    const nextButtonRef = useRef<HTMLDivElement>()
    
    return (
        <div className={styles.root}>
            <div style={currentPage === 1
                            ? { backgroundColor: 'rgb(59, 59, 59)' }
                            : { backgroundColor: 'gray' }
                        }
                 className={styles.button}
                 onClick={(e) => {
                    prevPageBtnHandler(e)
                 }}>
                {'<'}
            </div>
            <div className={styles.page}>
                {currentPage} / {pageCount}
            </div>
            <div style={currentPage === pageCount
                            ? { backgroundColor: 'rgb(59, 59, 59)' }
                            : { backgroundColor: 'gray' }
                        }
                 className={styles.button}
                 onClick={(e) => {
                    nextPageBtnHandler(e)
                 }}>
                {'>'}
            </div>
        </div>
    )
}


export default Pagination