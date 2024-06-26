import React, { useEffect, useState } from 'react'
import { categories } from '../config'
import { langArr } from '../language_codes'
import { countryArr } from '../country_codes'

const Filters = (props) => {
    const [q,setQ] = useState('');
    const [qInTitle,setQInTitle] = useState('');
    const [country,setCountry] = useState('');
    const [language,setLanguage] = useState('');
    const [category,setCategory] = useState('');
    const applyButtonClickHandler = () => {
      if(q!=='' && qInTitle!=='')
        return window.alert('Fill only one field among : query(in title) and query(in content) , or leave both blank');
      props.callback({q,qInTitle,country,language,category});
    }
  return (
    <div style={{backgroundColor:'#999999', width: '400px'}}>
        <h4>Filters</h4>
        <div style={{border:'1px solid black', margin:'0 10px'}}>
          <input className='inp' type="text" onChange={(e)=>setQInTitle(e.target.value)} placeholder='query(in title)' />
          <div>OR</div>
          <input className='inp' type="text" onChange={(e)=>setQ(e.target.value)} placeholder='query(in content)' />
        </div>
        <div style={{display:'flex',justifyContent: 'space-between', margin: '10px'}}>
          <label htmlFor="country">Country: </label>
          <select id="country" style={{width: '100px'}} onChange={(e)=>setCountry(e.target.value)} name="country">
              {
                countryArr.map((key,index)=>{
                    const country_code = key['alpha-2'].toLowerCase();
                  return (
                    <option value={country_code}>{key['name']}</option>
                  )
                })
              }
          </select>
        </div>
        {/* <div style={{height: '20px'}}></div> */}
        <div style={{display:'flex',justifyContent: 'space-between', margin: '10px'}}>
          <label htmlFor="category">Category: </label>
          <select id="category" style={{width: '100px'}} onChange={(e)=>setCategory(e.target.value)} name="category">
              {
                categories.map((key,index)=>{
                  return (
                    <option value={key}>{key}</option>
                  )
                })
              }
          </select>
        </div>
        <div style={{display:'flex',justifyContent: 'space-between', margin: '10px'}}>
          <label htmlFor="language">Language: </label>
          <select id="language" style={{width: '100px'}} onChange={(e)=>setLanguage(e.target.value)} name="language">
              {
                langArr.map((key,index)=>{
                  return (
                    <option value={key.language_code}>{key.language}</option>
                  )
                })
              }
          </select>
        </div>

        <div><button onClick={applyButtonClickHandler} style={{width: '100px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: 'white', fontSize: '15px'}}>Apply</button></div>
    </div>
  )
}

export default Filters