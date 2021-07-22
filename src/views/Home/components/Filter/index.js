import { useState } from 'react';

import { Icon } from '@iconify/react';
import searchFill from '@iconify-icons/eva/search-fill'

import './index.css';

export default function Filter({ list, setGames }) {

    const [title, setTitle] = useState('');
    const [style, setStyle] = useState({
        transition: 'all .3s ease',
    });

    const handleFocus = () => {
        setStyle({
            ...style,
            transform: 'scale(1.2)',
        })
    }

    const handleBlur = () => {
        setStyle({
            ...style,
            transform: 'scale(1)',
        })
    }

    const handleSearch = (titleToSearch) => {
        setTitle(titleToSearch);
        const gamesResult = list.filter(game => game.title.toLowerCase().includes(titleToSearch.toLowerCase()));
        setGames(gamesResult)
    }

    return (
        <div className='search-box' style={style}>
            <input 
            type='text' 
            placeholder='Search...' 
            value={title} 
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            />
            <Icon icon={searchFill} className='icon'/>
        </div>
    );
}