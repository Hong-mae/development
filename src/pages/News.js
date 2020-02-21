import React, { useState, useCallback } from 'react'

import NewsList from '../Components/News/NewsList'
import Categories from '../Components/News/Categories'

const News = ({ match }) => {
    // 라우터 적용전
    // const [category, setCategory] = useState('all');
    // const onSelect = useCallback(category => setCategory(category), []);

    // 라우터 적용 후
    const category = match.params.category || 'all';
    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    )
}

export default News
