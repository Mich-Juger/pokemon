import { useEffect, useState, useContext } from "react";
import  Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from "react-router";
import Context from "../Context";


export default function Pokemones() {
    const { listaPoke, setListaPoke } = useContext(Context);
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
    navigate(`/pokemones/${pokemonSeleccionado}`);

}

    return(
        <>
        <div className="container">
        <h1>Selecciona un Pokémon</h1>
        <Form.Select aria-label="Default select example" onChange={(e) => {setPokemonSeleccionado(e.target.value)}}>
            <option disabled selected> Elige un Pokémon </option>
            {
                listaPoke.map(( pokemon, i ) => (
                    <option key={i}> {pokemon.name}</option>
                ))
            }     
        </Form.Select>
        <Button variant="primary" onClick={() => verDetallePokemon()}> Ver detalle </Button>
        </div>
        </>
    )
}