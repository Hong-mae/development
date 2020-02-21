import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NewsItems from './NewsItems'
import axios from 'axios'
import usePromise from '../../lib/usePromise'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    // custom Hook 적용 전
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const res = await axios.get(
    //                 `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=455e3b6a24194aec894473ff6d2886b1`
    //             );
    //             setArticles(res.data.articles);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, [category])

    // if (loading) {
    //     return <NewsListBlock>대기 중....</NewsListBlock>
    // }

    // if(!articles){
    //     return null
    // }

    // custom Hook 적용 후
    const [ loading, response, error ] = usePromise(()=> {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=455e3b6a24194aec894473ff6d2886b1`
        )
    }, [ category ]);

    if(loading){
        return <NewsListBlock>대기 중....</NewsListBlock>
    }

    if(!response){
        return null;
    }

    if(error) {
        return <NewsListBlock>에러 발생!!!</NewsListBlock>
    }

    const { articles } = response.data;
    return (
        <NewsListBlock>
                {articles.map(article => (
                    <NewsItems key={articles.url} article={article}/>
                ))}
        </NewsListBlock>
    )
}

export default NewsList
