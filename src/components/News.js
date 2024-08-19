import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

import InfiniteScroll from "react-infinite-scroll-component";
import { cleanup } from '@testing-library/react';



const News =(props)=> {
  const [articles, setArticles]=useState([])
  const [loading, setloading]=useState(false)
  const [page, setpage]=useState(1)
  const [totalResults, seTotalResults]=useState(0)
  

   const capatalizefirst=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const updatenews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/everything?q=${props.category}&from=2024-08-10&to=2024-08-10&apiKey=3c15664d789a4674a8dfd9071e607e53&page=${page}&pageSize=${props.pageSize}`;
   setloading(true);
    let data=await fetch(url);
    props.setProgress(50);
    let parsedData=await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    seTotalResults(parsedData.totalResults);
    setloading(false);
      props.setProgress(100);
  }
 useEffect(()=>{
   document.title=`${capatalizefirst(props.category)} - NewsPulse`;
  updatenews();
 },[])


  const fetchMoreData =async () => {
     const url=`https://newsapi.org/v2/everything?q=${props.category}&from=2024-08-10&to=2024-08-10&apiKey=3c15664d789a4674a8dfd9071e607e53&page=${page+1}&pageSize=${props.pageSize}`;
     setpage(page+1);
     let data=await fetch(url);
     let parsedData=await data.json();
     console.log(parsedData);
     setArticles(articles.concat(parsedData.articles));
     seTotalResults(parsedData.totalResults);
     setloading(false);
    }; 

      return (
          <div className='container my-3'>
            <h1 className="text-center" style={{marginTop:'90px'}}>NewsPulse - Top Headlines on {capatalizefirst(props.category)}</h1>
             {loading && <Spinner/>} 
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row" >
        { articles.map((element) => {
    return element && (
      <div className='col-md-4' key={element.url}>
        <Newsitem 
          title={element.title || "No Title"} 
          description={element.description || "No Description"} 
          imageUrl={element.urlToImage || "fallback-image-url.jpg"} 
          newsUrl={element.url} 
          author={element.author || "Unknown"} 
          date={element.publishedAt || "Unknown Date"} 
        />
      </div>
    );
})}

            </div>
        </div>
        </InfiniteScroll>
      </div>
    )
}


export default News


