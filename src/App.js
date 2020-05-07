import React from 'react';
//import { isThrowStatement } from 'typescript';
/**
import PropTypes from "prop-types";
 
const foodILike = [
  {
  id:1,
  name:"Kimchi",
  image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta-650x650.jpg",
  rating :5
},
{
  id:2,
  name:"Samgyopsal",
  image:
    "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1",
    rating : 4.9
}
];

function Food({name , picture,rating}){
  return <div> 
  <h1>I Like {name}</h1>
  <h1>{rating}</h1>
  <img src = {picture} alt={name}></img>
  </div>
  }

  Food.prototypes = {
    name:PropTypes.number.isRequired,
    picture:PropTypes.string.isRequired,
    rating:PropTypes.string.isRequired
  };


function App() {
  return (
  <div className="App">
    {foodILike.map(dish =>( 
    <Food key={dish.id} name={dish.name} picture = {dish.image} rating ={dish.rating}/>
    ))}
  </div>
  );
  }
  */
/** 
  class App extends React.Component{
      //dont have return 
      //state is object
      //if something must be changed , should be in state
      
      state = {
        count : 0
      };
      add = () => {
        console.log("add");
        this.setState(current => ({count:current.count +1}));
      };
      minus = () =>{
        console.log("minus");
        this.setState(current => ({count:current.count-1}));
      }
      componentDidMount(){
        console.log("rendered");
      }

      componentDidUpdate(){
        console.log("i just updated");
      }

      componentWillUnmount(){
        console.log("goodbye");
      }
      render(){
        console.log("i m rendering");
      return <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        </div>;
      }
  }
*/

class App extends React.Component {
  state = {
    isLoading :true,
    movie:[]
  };
  componentDidMount(){
    /**setTimeout(()=>{
      this.setState({isLoading:false});
    },6000)*/
  }
  render(){
  const {isLoading} = this.state
  return <div>{isLoading ? "Loading": "we are ready"}</div>
  }
}
export default App;
