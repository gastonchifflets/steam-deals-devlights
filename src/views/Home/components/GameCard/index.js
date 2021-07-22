import { Icon } from '@iconify/react';
import starFill from '@iconify-icons/bi/star-fill';
import starHalf from '@iconify-icons/bi/star-half';
import starIcon from '@iconify-icons/bi/star';


import './index.css';

export default function GameCard({ game }) {

    let score = game?.steamRatingPercent / 20;
    const discount = ((1 - game?.salePrice / game?.normalPrice) * 100).toFixed(0);
    const stars = [];

    while (stars.length !== 5) {
        if (score - 1 >= 0) {
            stars.push(<Icon  icon={starFill} />)
        } else if (score < 1 && score - 0.5 >= 0) {
            stars.push(<Icon  icon={starHalf} />)
        } else {
            stars.push(<Icon  icon={starIcon} />)
        }
        score -= 1;
    }

    return (
        <div className='card'>
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
            <div className='game-price'>
                <span className='normal-price'>${game?.normalPrice}</span> 
                <span className='sale-price'>${game?.salePrice}</span>
            </div>
        </div>
    );
}