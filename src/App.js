import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      
      <Biography />
      <Shopinglist />
      <Favorats />
      <Click />
      <Todo />
      
      </div>
   
    );
  }
}

class Biography extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hello Kitty!</h1>

       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC9RM9HDWx-eJKNLXabRDFb2pFHhyV8gzlI_0rmNLtrirOO6J"/>
       <h3>Nane: Kitty</h3>
    
        <table border="1px" >
        <tr>
          <th>Skills</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>Singing</td><td>Purrr</td>
        </tr>
        <tr>
          <td>Napping</td><td>On the couch</td>
        </tr>
        <tr>
          <td>TV</td><td>Watchin TV</td>
        </tr>
       </table> 
       <hr />     
      </div>




    );
  }
}


class Shopinglist extends Component {
  render() {
    return (
      <div className="App">
       <h1>Shoping List</h1>

      <ol>
        <li>
           Milk
        </li>
        <li>
         Coffee
        </li>
        <li>
         Ice-Cream
        </li>
        <li>
          Cat food
        </li>
        <li>
          Cheese
        </li>
      </ol>
      <hr/>
      </div>



    );
  }
}
<br/>
class Favorats extends Component {
  render() {

  const topics =['Candy','lollipop', 'Cooky', 'Sweets'];
    return (
      <div className="App">
       <h1>Favorats</h1>

      <ol>
    
        {topics.map(topics => <li>{topics} </li>)}
      </ol>
      <hr/>
      </div>



    );
  }
}


<br />
class Click extends Component {
 handeClick(){
  alert ('Hello Kitt! You clicked me!');
 }

  render() {

    return (
      <div className="App">
<button onClick ={this.handeClick.bind(this)} border="2px">Hey Click ME!</button>
      <hr/>
      </div>
    );
  }
}
<br/>





class Todo extends Component {

  constructor() {
    super();
    this.state = {
     todoItems: []
    }
  }

  handeClickAdd() {
    const todoItems = this.state.todoItems;
    todoItems.push(this.textbox.value);

    this.setState({
      todoItems: todoItems
    });
  }
  handeClickRemove() {
        const todoItems = this.state.todoItems;


const result = todoItems.filter(item => item !== this.textbox.value);


    this.setState({
      todoItems: result
    });
  }



  render() {
    return (
      <div className="App">
      <h1>To Do List</h1>
       <br />

      <input type="text" ref={textbox => this.textbox = textbox} />
      <button onClick ={this.handeClickAdd.bind(this)} >Add To Do!</button>
      <button onClick ={this.handeClickRemove.bind(this)} >Remove To Do!</button>

     <p>Todo Items</p>
      <br />
      <ul>
        {this.state.todoItems.map(item => <li>{item} </li>)}
      </ul>
     
      </div>

    );
  }
}

 <hr/>







export default App;
