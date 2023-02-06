import DescriptionCard from '../DescriptionCard/DescriptionCard'
import Pagination from '../Pagination/Pagination'
import styles from './CardsSkeleton.module.css'


const CardsSkeleton = () => {
    let arr:string[] = []
    arr.length = 6
    return (
        <div className={styles.root}>
            <Pagination currentPage={1}
                        pageCount={'?'}
                        nextPageBtnHandler={()=>{}}
                        prevPageBtnHandler={()=>{}}/>
            {arr.map(_ => {
                return (
                    <DescriptionCard title='Loading...'/>
                )
            })}
        </div>
    )
}


export default CardsSkeleton