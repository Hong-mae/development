import React, { useState } from 'react'
import axios from 'axios'

const News = () => {
    const [data, setData] = useState(null)
    
    // const onClick = (e) => {
    //     axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
    //         setData(res.data);
    //     });
    // }

    const onClick = async () => {
        try {
            const res = await axios.get(
                "https://newsapi.org/v2/top-headlines?country=kr&apiKey=455e3b6a24194aec894473ff6d2886b1",
            );

            setData(res.data);
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <div>
           <div><button onClick={onClick}>불러오기</button></div> 
           {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
        </div>
    )
}

export default News
