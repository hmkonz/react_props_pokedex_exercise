import React from "react";
import "./Pokecard.css";

const Pokecard = ({pokemonName, img, type, exp }) => (
    <div className = "Pokecard">
            <h4 className="Pokecard-name">{pokemonName}</h4>
            <img className="Pokecard-img" src ={img} alt =" " ></img>
            <ul>
                <li>Type: {type}</li>
                <li>Exp: {exp}</li>
            </ul>
    </div>
)




export default Pokecard;