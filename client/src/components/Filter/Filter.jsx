import React from 'react'

const Filter = () => {
  return (
    <div>
        <h1>Filter</h1><br />
        <h2>Categorgy</h2>
        <select name="" id="">
            <option value="1">electro</option>
            <option value="2">mekan</option>
            <option value="3">auot</option>
        </select><br />
        <h2>pries</h2>
        <h2 id='min'>MIN</h2>
        <h2 id='max'>MAX</h2><br /><br />
        <div id='send'>
        <input type="submit"  value='send' />
        </div>
        
       




    </div>
  )
}

export default Filter