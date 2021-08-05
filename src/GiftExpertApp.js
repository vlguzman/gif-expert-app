import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types'

const GiftExpertApp = ( () => {

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // 'HunterXHunter'
    //     // setCategories( [...categories,'HunterXHunter'] ); // al array anterior le agrega un nuevo elemento
    //     setCategories( cats => [ ...cats, 'HunterXHunter' ] ); // al estado anterior le agrega un nuevo elemento
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <CategoryAdd setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )
});

export default GiftExpertApp;