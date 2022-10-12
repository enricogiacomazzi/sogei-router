import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useMemo } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const Pag3: React.FC = () => {

    const {name} = useParams();

    const [sp, setSp] = useSearchParams();

    const location = useLocation();

    console.log(location);

    const {data, isLoading} = useQuery<any, any, any>(['detail', name], 
        () => axios.get('https://pokeapi.co/api/v2/pokemon/' + name).then(x => x.data)
    );

    const imgPos = sp.get('img');

    const img = useMemo(() => imgPos === 'back' ? data?.sprites?.back_default : data?.sprites?.front_default, [data, imgPos]);


    const turnPokemon = () => {
        setSp({img: imgPos === 'back' ? 'front': 'back'});
    }

    if(isLoading) {
        return <div>loading...</div>
    }


    return (
        <>
            <ul>
                <li>name: {data?.name}</li>
                <li>weight: {data?.weight}</li>
                <li>height: {data?.height}</li>
            </ul>
            <img src={img}/>
            <button onClick={turnPokemon}>Gira</button>
        </>

    );
}

export default Pag3;