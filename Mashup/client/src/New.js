
import React from 'react'

//const aleatoire1 = () => Math.floor(Math.random() * 1000)
//const aleatoire2 = () => Math.floor(Math.random() * 1000)
// <p>{`Bienvenue, ton code de partage est le: ${aleatoire1()}-${aleatoire2()}`}</p>

function New() {
const aleatoire1 = () => Math.floor(Math.random() * 1000)
const aleatoire2 = () => Math.floor(Math.random() * 1000)
    return (
        <div>
            <p>{`Bienvenue, ton code de partage est le: ${aleatoire1()}-${aleatoire2()}`}</p>
        </div>
    )
}

export default New