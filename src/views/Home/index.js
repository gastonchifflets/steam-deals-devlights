import { useEffect, useState } from "react";

import NavBar from "../../components/NavBar";

import './index.css';
import hero from '../../img/hero.jpg';

import GameCard from "./components/GameCard";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

export default function Home() {

    const [games, setGames] = useState([]);
    const [gamesList, setGamesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchApi = async () => {
        try {
            const response = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15');
            const responseJSON = await response.json();
            setGamesList(responseJSON);
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
                <Filter list={gamesList} setGames={setGames} />
                <div className='games-list'>
                    {isLoading ? 
                        <h2 style={{
                            color:'white',
                            textAlign: 'center',
                        }}>Loading...</h2> 
                    : 
                        games?.map((game) => <div key={game.deadID}>
                                                <GameCard game={game} key={game.deadID}/>
                                            </div>)}
                </div>
            </main>
            <Footer />
        </>
    );
}