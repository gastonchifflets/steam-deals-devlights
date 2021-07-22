import { Icon } from '@iconify/react';
import starFill from '@iconify-icons/bi/star-fill';
import starHalf from '@iconify-icons/bi/star-half';
import starIcon from '@iconify-icons/bi/star';

import './index.css';
import { DealsSelectedContext } from '../../../../App';
import { useContext, useState } from 'react';

// shows the details of a game deal

export default function GameCard({ game }) {

    const [gameAddedStyle, setGameAddedStyle] = useState({});

    const context = useContext(DealsSelectedContext);
    const { dealsSelected, setDealsSelected } = context;

    let score = game?.steamRatingPercent / 20;
    const discount = (Number(game?.savings)).toFixed(0);
    const stars = [];

    // determinate how many stars has the game
    while (stars.length !== 5) {
        if (score - 1 >= 0) {
            stars.push(<Icon key={stars.length} icon={starFill} />)
        } else if (score < 1 && score - 0.5 >= 0) {
            stars.push(<Icon key={stars.length} icon={starHalf} />)
        } else {
            stars.push(<Icon key={stars.length} icon={starIcon} />)
        }
        score -= 1;
    }

    // add the game to the list of DealsSelected for showing in Cart
    const handleClick = () => {
        setDealsSelected([game, ...dealsSelected])
        setGameAddedStyle({
            height: '100%',
            opacity: '1'
        })
        setTimeout(() => {
            setGameAddedStyle({
                height: '0px',
                opacity: '0'
            })
        }, 2000)
    }

    return (
        <div className='card'>
            <div className='game-added' style={gameAddedStyle}>
                <span>Deal added to cart.</span>
            </div>
            <div className='card-header'>
                <div className='game-discount'>
                    <span>{discount}% off</span>
                </div>
                <img src={game?.thumb} alt='game' />
                <h4 className='game-title'>{game?.title}</h4>
            </div>
            <div>
                <p 
                style={{
                    fontSize:'1.4rem'
                }}
                >Steam Review</p>
                <div className='game-stars'>
                    {stars}
                </div>
            </div>
            <div className='game-price' onClick={() => handleClick()}>
                <span className='normal-price'>${game?.normalPrice}</span> 
                <span className='sale-price'>${game?.salePrice}</span>
            </div>
        </div>
    );
}