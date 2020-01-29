import React, { useState } from 'react'
import axios from 'axios'

const News = () => {
    const [data, setData] = useState(null)
    
    const onClick = (e) => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
            setData(res.data);
        });
    }
    return (
        <div>
           <div><button onClick={onClick}>불러오기</button></div> 
           {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
        </div>
    )
}

export default News
