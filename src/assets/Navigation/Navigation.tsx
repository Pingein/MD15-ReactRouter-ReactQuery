import React, { useState } from 'react'
import styles from './Navigation.module.scss'
import { Outlet, Link } from "react-router-dom";


interface NavLink {
    to: string
    text: string
}

interface NavigationParams {
    links: NavLink[]
}


let links:NavLink[] = [{to:'../', text:'Home'},
                       {to:'../characters', text:'Characters'},
                       {to:'../episodes', text:'Episodes'},
                       {to:'../about', text:'About'}]


const Navigation = ({links}:NavigationParams) => {
    return (
        <div className={styles.navBar}>
            <ul className={styles.nav}>

                {links.map(link => {
                    return (
                        <li className={styles.navItem}>
                            <Link className={styles.navText} 
                                to={link.to}>
                                {link.text}
                            </Link>
                        </li>
                    )
                })}

                {/* <li className={styles.navItem}>
                    <Link className={styles.navText} 
                          to={`../`}>
                        Home
                    </Link>
                </li>

                <li className={styles.navItem}>
                    <Link className={styles.navText} 
                          to={`../characters`}>
                        Characters
                    </Link>
                </li>

                <li className={styles.navItem}>
                    <Link className={styles.navText} 
                          to={`../about`}>
                        About
                    </Link>
                </li> */}

            </ul>
        </div>
    )
}


export default Navigation

export { links }