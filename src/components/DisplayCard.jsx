import React, { useState } from 'react'
import axios from 'axios'

import styles from '../UI/DisplayCard.module.css'

import CardData from './CardData'


const url = "https://pokeapi.co/api/v2/pokemon/"

const DisplayCard = (props) => {

    const [list, setList] = useState([])

        axios.get(`${url}1`)
        .then((res) => {
            // console.log(res.data)
            setList([res.data.name])
        })
        .catch((err) => console.log(err))
    

    console.log(list)
    const pokemonList = list.map(pokemon => {
        return <CardData pokemon={pokemon} />
    
    })

    return (
        <main className={styles.main}>
        <div className={styles.card_container}>
            {pokemonList}
        </div>
        </main>
    )
}

export default DisplayCard