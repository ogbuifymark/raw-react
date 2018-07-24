import React  from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Counter from './Counter';
import {OutsetBox,Box, DottedBox } from './Box.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      term:'', 
      items: []
      // clicks:0,
      // show:true,
      // img: '',
      // counter: 0
    }
  }
 
  onChange = (event) =>{
    this.setState({term: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.state.items.push(this.state.term);
    this.setState({ term: '', items: this.state.items });
  }
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const api_key = 'dc6zaTOxFJmzC';
  //   const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
  //     .catch(e => console.log('error', e));
  // }
  // IncrementItem = () => {
  //   this.setState({ clicks: this.state.clicks + 1 });
  // }
  // DecreaseItem = () => {
  //   this.setState({ clicks: this.state.clicks - 1 });
  // }
  // ToggleClick = () => {
  //   this.setState({ show: !this.state.show });
  // }
  // incrementCounter = () => {
  //   this.setState({
  //     counter: ++this.state.counter
  //   });
  // };
  render(){
    return(
      
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
          {/* <form className="App" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} />
              <button>Submit</button>
          </form>

          <form onSubmit={this.handleSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Search!</button>
          </form>
          <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
          { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
            <List items={this.state.items}/>
            <OutsetBox items={this.state.items}/>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Search!</button>
          </form>
          <img src={this.state.img} height="200" alt={this.state.term} />
          <Counter counter={this.state.counter} />
          <button onClick={this.incrementCounter}>Click1</button>
        </div> */}

      </div>
    );
  }
}

//   updates(e){
//     this.setState({txt: e.target.value})
//   }
//   render() {
//     let txt = this.state.txt
//     let cat = this.state.cat

//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <input type="text"
//         onChange={this.updates.bind(this)}/>
//         <h1>{txt}- {cat}</h1>
//         <p className="App-intro">
//         </p>
//       </div>
//     );
//   }
// }
// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }

// App.defaultProps ={
//   txt:"This is the default text"
// }

// const Widget =(props) =>
// <input type="text" onChange={props.updates}/>
export default App;
