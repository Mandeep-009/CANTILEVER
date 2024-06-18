import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const url1 = `${process.env.REACT_APP_URL1}` | ''
    const [data1,setData1] = useState([]);

    const url2 = `${process.env.REACT_APP_URL2}` | ''
    const [data2,setData2] = useState([]);

    const url3 = `${process.env.REACT_APP_URL3}` | ''
    const [data3,setData3] = useState([]);

    useEffect(()=>{
      fetch(url1)
        .then((res)=>{
          return res.json();
        })
        .then((d)=>{
          setData1(d.articles);
        })
        .catch((err)=>{
          console.log('an error occured: ', err);
        })

      fetch(url2)
        .then((res)=>{
          return res.json();
        })
        .then((d)=>{
          setData2(d.results);
        })
        .catch((err)=>{
          console.log('an error occured: ', err);
        })
      fetch(url3)
        .then((res)=>{
          return res.json();
        })
        .then((d)=>{
          setData3(d.results);
        })
        .catch((err)=>{
          console.log('an error occured: ', err);
        })
    },[])
  return (
    <div className="App">
      {
        data1? (
          data1.map((key,index)=>{
            return (
              <div>
              <h2 id={index}>{key.title}</h2>
              <h4>{key.description}</h4>
              <p>{key.content}</p>
              <a href={key.url} target='_blank'>Link to the article</a>
              <h4>{key.publishedAt}</h4>
              <hr></hr>
              </div>
            )
          })
        ):(
          null
        )
      }
      <hr></hr>
      {
        data2?(
          data2.map((key,index)=>{
              if(key.description.length > 200){
                key.description = key.description.substring(0,195).concat("...")
              }
            return (
              <div>
              <h2 id={index}>{key.title}</h2>
              <p>{key.description}</p>
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
      <hr></hr>
      {
        data3?(
          data3.map((key,index)=>{
            return (
              <div>
              <h2 id={index}>{key.title}</h2>
              <a href={key.url} target='_blank'>Link to the article</a>
              <h4>{key.published_date}</h4>
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

export default App;
