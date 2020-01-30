import React, { useState, useCallback } from 'react'

import NewsList from '../Components/News/NewsList'
import Categories from '../Components/News/Categories'

const News = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);
    return (
        <>
            <Categories category={category} onSelect={onSelect}/>
            <NewsList category={category}/>
        </>
    )
}

export default News
