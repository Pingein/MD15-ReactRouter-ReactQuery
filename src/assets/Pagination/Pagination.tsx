import React, { useState } from 'react'
import styles from './Pagination.module.css'


interface PaginationParams {
    currentPage: string | number
    pageCount: string | number

    prevPageBtnHandler: React.MouseEventHandler<HTMLDivElement>
    nextPageBtnHandler: React.MouseEventHandler<HTMLDivElement>
}

const Pagination = ({currentPage, pageCount, prevPageBtnHandler, nextPageBtnHandler }:PaginationParams) => {
    return (
        <div className={styles.root}>
            <div className={styles.button}
                 onClick={(e) => {
                    prevPageBtnHandler(e)
                 }}>
                {'<'}
            </div>
            <div className={styles.page}>
                {currentPage} / {pageCount}
            </div>
            <div className={styles.button}
                 onClick={(e) => {
                    nextPageBtnHandler(e)
                 }}>
                {'>'}
            </div>
        </div>
    )
}


export default Pagination