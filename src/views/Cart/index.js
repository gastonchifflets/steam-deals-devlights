import { useState, useContext } from 'react';
import Modal from 'react-modal';

import { Icon } from '@iconify/react';
import closeOutlined from '@iconify-icons/ant-design/close-outlined';
import shoppingCart from '@iconify-icons/fa-solid/shopping-cart';

import './index.css';
import { DealsSelectedContext } from '../../App';

const customStyles = {
    overlay: {
        zIndex: '2',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    content: {
        backgroundColor: 'black',
        color: 'white',
        maxWidth: '500px',
        width: '90%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
    },
  };


export default function Cart() {
    const [show, setShow] = useState(false);

    const context = useContext(DealsSelectedContext);
    const { dealsSelected } = context;

    const total = (dealsSelected?.reduce((acc, currValue) => acc + Number(currValue.salePrice), 0)).toFixed(2);

    function openModal() {
        console.log(dealsSelected)
        setShow(true);
    }


    function closeModal() {
        setShow(false);
    }

  return (
    <div
    >
        <button 
        className='navbar-item secondary'
        onClick={openModal}
        style={{
            position: 'relative',
            top: '0',
            right: '0',
        }}
        >
            <Icon icon={shoppingCart}/>
            <span className='item-text'>Cart</span>
        </button>
        <Modal
        isOpen={show}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
        >
        <div className='modal-header'>
            <h2>Deals selected</h2>
            <Icon icon={closeOutlined} className='close-icon' onClick={closeModal}/>
        </div>
        <div className='modal-content'>
            {dealsSelected.length === 0 ? 
                <p>There's no deals selected.</p> 
            : 
                dealsSelected.map(game => (
                                            <>
                                                <p>{game.title}. ${game.salePrice}</p>
                                            </>
                                            ))}
        </div>
        <div className='total'>
            <p>Deals total amount:</p>
            <p style={{
                marginBottom: '0px',
                fontSize: '1.4rem'
                }}
            >
                ${total}</p>
        </div>
        </Modal>
        
    </div>
  );
}

// 
