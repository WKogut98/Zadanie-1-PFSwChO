import React,{ Component } from "react";
import axios from 'axios';
//const { useState } =React;

 
class Fib extends Component {
  constructor(props)
  {
    super(props);
    this.state={k: 0,
                values:{},
                indexes:[]};
    this.handleChange = (e) => this.setState({k: e.target.value});
  }
  componentDidMount(){
    this.fetchValues();
    //this.fetchIndexes();
  }
  state ={k: 0};
  async fetchValues(){
    const values= await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }
  handleClick = async (e) =>
  {
    e.preventDefault();
    await axios.post('/api/values', {
      index: this.state.k,
    });
  }
  renderValues()
  {
    const entries=[];
    for(let i in this.state.values)
    {
      entries.push(
        <div key={i}>
        Element {i} &emsp; Wynik: {this.state.values[i]}
        </div>
      )
    }
    return entries;
  }
  render() {
    return (
      <div>
        <h2>Kalkulator n-go wyrazu ciągu Fibonacciego</h2>
        <div id="fibo">
          <input type="text" value={this.state.k} onChange={this.handleChange}/><br/>
          <h3>
          {printFib(this.state.k)}
          </h3>
          <button onClick={ this.handleClick }>Zapisz</button>
          <div id="saved">
            <h3>Ostatnio zapisane</h3>
            { this.renderValues() }
          </div>
        </div>
      </div>
    );
  }
}

function printFib(k)
{
  var fib_val=calculateFib(k);
  return(
    <div>
      Wynik: {fib_val}
    </div>
  );
}
function calculateFib(k)
{
  /*
  //rozwiazanie rekursywne
  if(k==0)
  {
    return 0;
  }
  else if(k==1)
  {
    return 1;
  }
  else if(k<0)
  {
    return;
  }
  else
  {
    return calculateFib(k-1)+calculateFib(k-2);
  }
  */
  //rozwiazanie w petli
  if(k==0)
  {
    return 0;
  }
  if(k<0)
  {
    return;
  }
  var fib1=0;
  var fib2=1;
  var fibo;
  for(var i=1;i<=k;i++)
  {
    fibo=fib1+fib2;
    fib1=fib2;
    fib2=fibo;
  }
  return fib1;
}
 
export default Fib;