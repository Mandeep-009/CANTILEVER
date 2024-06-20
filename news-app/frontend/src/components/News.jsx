import { useEffect, useState } from 'react';

function News({url}) {
    const [data,setData] = useState([]);
    const [loaded,setLoaded] = useState(false);
  
    useEffect(()=>{
      setLoaded(false);
      fetch(url)
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          setData(data.results);
          setLoaded(true);
        })
        .catch((err)=>{
          console.log('an error occured: ', err);
        })
    },[url])
  return (
    <div>
      {
        loaded ? (
          data.map((key,index)=>{
            let content = key.description;
              if(key.description && key.description.length > 200){
                content = key.description.substring(0,195).concat("...")
              }
            return (
              <div key={index}>
              <h2>{key.title}</h2>
              <p>{content}</p>
              <a href={key.link} target='_blank'>Link to the article</a>
              <h4>{key.pubDate}</h4>
              <hr></hr>
              </div>
            )
          })
        ):(
          null
        )
      }
    </div>
  );
}

export default News;
