import React from 'react';



const foodILike = [
  {
  id:1,
  name:"Kimchi",
  image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta-650x650.jpg"
},
{
  id:2,
  name:"Samgyopsal",
  image:
    "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1"
}
];

function Food({name , picture}){
  return <div> 
  <h1>I Like {name}</h1>
  <img src = {picture} alt={name}></img>
  </div>
  }

function App() {
  return (
  <div className="App">
    {foodILike.map(dish =>( 
    <Food key={dish.id} name={dish.name} picture = {dish.image}/>
    ))}
  </div>
  );
  }

export default App;
