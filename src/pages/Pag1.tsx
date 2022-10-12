import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const Pag1: React.FC = () => {

    const {data, isLoading} = useQuery<any, any, Array<any>>(['data'], () => 
        axios.get('https://pokeapi.co/api/v2/pokemon').then(x => {
            console.log(x.data);
            return x.data.results
        }));

    if(isLoading) {
        return <span>loanding...</span>
    }

    return (
        <ul>
            {(data ?? []).map(x => <li key={x.name}><Link to={'/detail/' + x.name}>{x.name}</Link></li>)}
        </ul>
    );
}

export default Pag1;
