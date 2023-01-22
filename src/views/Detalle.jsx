import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function Detalle() {
    const url_api = 'https://pokeapi.co/api/v2/pokemon/';
    const { nombre } = useParams();
    const [pokeSeleccionado, setPokeSeleccionado] = useState({});

    

useEffect(() => {
    getInfoPokemon();
}, []);

const getInfoPokemon = async() => {
    const resp = await fetch(url_api + nombre)
    const data = await resp.json();  
    setPokeSeleccionado(data);      
};     

let contenido;

if (nombre && Object.keys(pokeSeleccionado).length !== 0 ) {
    contenido = 
        <div>
            <h1>{pokeSeleccionado.name}</h1>
            <img src={pokeSeleccionado.sprites.front_shiny}/>
            <h3>Habilidades:</h3>
            {
                pokeSeleccionado.abilities.map((ability) => (
                    <p>{ability.ability.name}</p>
                ))
            }

        </div>
} else {
    contenido = <p> No hay valor </p>
}


return (
            contenido
);


}