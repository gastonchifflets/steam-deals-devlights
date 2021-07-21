import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";

import './index.css';
import hero from '../../img/hero.jpg';
import GameCard from "./components/GameCard";

export default function Home() {

    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchApi = async () => {
        try {
            const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
            const responseJSON = await response.json();
            setGames(responseJSON);
            setIsLoading(false);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <div className='hero'>
                <img src={hero} alt='hero' />
            </div>
            <main className='container'>
                <div className='games-list'>
                    {isLoading ? <h2>Cargando...</h2> : games?.map((game, index) => <div key={index}>
                                                                                <GameCard game={game} />
                                                                            </div>)}
                </div>
            </main>
        </>
    );
}