import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Filters from '../components/Filters'
import News from '../components/News'
import { news_api_url } from '../config'

const Homepage = () => {
    const [url,setUrl] = useState(`${news_api_url}&language=en&category=world`);
    const callback_fn = (data) => {
      const {q,qInTitle,country,language,category} = data;
      let newsUrl = `${news_api_url}`;
      if(qInTitle !== '')
        newsUrl += `&qInTitle=${qInTitle}`;
      if(q !== '')
        newsUrl += `&q=${q}`;
      if(country !== '')
        newsUrl += `&country=${country}`;
      if(language !== '') 
        newsUrl += `&language=${language}`;
      if(category !== '---SELECT---' && category !== '')
        newsUrl += `&category=${category}`;
      setUrl(newsUrl);
    }
  return (
    <div>
        <Header />
        <div style={{display:'flex'}}>
            <Filters callback={callback_fn}/>
            <News url={url}/>
        </div>
    </div>
  )
}

export default Homepage