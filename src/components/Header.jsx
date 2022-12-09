import React from 'react';
import styles from '../UI/Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Pokemon App</h1>
            <nav>
            <Link to="/" className={styles.a}>Home</Link>
            </nav>
        </header>
    )
}

export default Header