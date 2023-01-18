import { useEffect, useState } from "react";
import  Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from "react-router";

export default function Pokemones() {
    const [listaPoke, setListaPoke] = useState('');
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');
    const navigate = useNavigate();
    const url_api = 'https://pokeapi.co/api/v2/pokemon/';
    
    useEffect(() => {
        getListaPokemon();
    }, []);
    
    const getListaPokemon = async() => {
        const resp = await fetch(url_api);
        const data = await resp.json();  
        setListaPoke(data.results);   
    }; 

const verDetallePokemon = () => {
    Navigate(`/pokemones/${pokemonSeleccionado}`);

}

    return(
        <>
        <div className="container">
        <h1>Selecciona un Pokémon</h1>
        <Form.Select aria-label="Default select example" onChange={() => {setPokemonSeleccionado()}}>
            <option> Selecciona un Pokémon</option>     
        </Form.Select>
        <Button variant="primary" onClick={() => verDetallePokemon}> Ver detalle</Button>
        </div>
        </>
    )
}