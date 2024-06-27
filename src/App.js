import './App.css';
import React, { useState } from 'react'
import Products from './Products';

const App = () => {

  const [search,setSearch]=useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "52c1f33d";
  const YOUR_APP_KEY ="a9832d3701f88ecf8cdb32985d38fea6";
  const submitHandler = e =>{
    e.preventDefault();
    console.log(search);

    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(data => setData(data.products))

    // .then(console.log(data))

    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )

  }
  return (
    <div className="App">
      <h1>Food Order App</h1>
      <form onSubmit={submitHandler} className='formDesign'>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search here your food'/><br/><br/>
        <input type='submit' className='btn btn-primary' value='Submit' /><br/><br/>
      </form>
      {data.length>=1 ? <Products  data={data}/>:null}
    </div>
  )
}

export default App

