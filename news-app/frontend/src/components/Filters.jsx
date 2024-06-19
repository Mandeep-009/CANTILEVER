import React from 'react'

const Filters = () => {
  return (
    <div style={{backgroundColor:'#999999', width: '400px'}}>
        <h4>Filters</h4>
        <input className='inp' type="text" placeholder='query(in title)' />
        <input className='inp' type="text" placeholder='query(in content)' />
        <input className='inp' type="text" placeholder='country' />
        <input className='inp' type="text" placeholder='category' />
        <label for="language">Language: </label>
        <select id="language" name="language">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="tamil">Tamil</option>
            <option value="telugu">Telugu</option>
        </select>

        <div><button style={{width: '100px', height: '30px', borderRadius: '8px', border: 'none', cursor: 'pointer', backgroundColor: 'white', fontSize: '15px'}}>Apply</button></div>
    </div>
  )
}

export default Filters