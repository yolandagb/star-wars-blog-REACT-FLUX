import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/index.js";

export default function(props) {

    const { store, actions } = useContext(Context);
    

    // useEffect(()=> {
    //     actions.getFavorites();
    //     console.log('store.favorites desde favorites.js: ', store.favorites)
    // },[store.favorites])
    

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Favourites
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
            {actions.getFavourites().map( (fav, index) =>  { 
                return (
                    <a className="dropdown-item" key={index} href="#">{fav}
                        <button onClick={() => actions.deleteFavourites(fav)} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </a>
                )
            })
            }     
            </div>
        </div>
    )  
}