import React from 'react';
//import 'App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }
  update(e){
    let code = e.target.value;
    try{
      this.setState({
        output: window.Babel.transform(code, {presets: ['es2015','react']}).code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App

// import React from 'react';
//
// const HOC = (InnerComponent) => class extends React.Component {
//   render(){
//     return(
//       <InnerComponent {...this.props} />
//     )
//   }
// }
//
// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <Button>button</Button>
//         <hr />
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }
//
// const Button = HOC((props) => <button>{props.children}</button>)
//
// class Label extends React.Component {
//   render(){
//     return (
//       <label>{this.props.children}</label>
//     )
//   }
// }
//
// const LabelHOC = HOC(Label);
//
// export default App

// import React from 'react';
//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {items: []}
//   }
//   componentWillMount(){
//     fetch( 'http://swapi.co/api/people/?format=json')
//       .then( response => response.json() )
//       .then( ({results: items}) => this.setState({items}))
//   }
//   filter(e){
//     this.setState({filter: e.target.value})
//   }
//   render(){
//     let items = this.state.items;
//     if(this.state.filter){
//       items = items.filter( item =>
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase()))
//     }
//     return(
//       <div>
//         <input type='text' onChange={this.filter.bind(this)} />
//         {items.map(item => <Person key={item.name} person={item} />)}
//       </div>
//     )
//   }
// }
//
// const Person = (props) => <h4>{props.person.name}</h4>
//
// export default App

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     constructor(){
//       super();
//       this.state = {val: 0}
//       this.update = this.update.bind(this)
//     }
//     update(){
//       this.setState({val: this.state.val + 1})
//     }
//     componentWillMount(){
//       console.log('componentWillMount')
//     }
//     componentDidMount(){
//       console.log('componentDidMount')
//     }
//     componentWillUnmount(){
//       console.log('componentWillUnmount')
//     }
//
//     render(){
//       console.log('render time');
//       return <button onClick={this.update}>{this.state.val}</button>
//     }
// }
//
// class Wrapper extends React.Component {
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>UnMount</button>
//         <div id='a'></div>
//       </div>
//     )
//   }
// }
//
// // const Title = (props) => <h1>{props.text}</h1>
// //
// // Title.propTypes = {
// //   text(props, propName, component){
// //     if(!(propName in props)){
// //       return new Error('missing ${propName}')
// //     }
// //     if(props[propName].length < 6){
// //       return new Error('${propName} was too short')
// //     }
// //   }
// // }
//
// // const Button = (props) => <button>{props.children}</button>
//
// // class Heart extends React.Component {
// //   render(){
// //     return <span>&hearts;</span>
// //   }
// // }
//
// // const Widget = (props) =>
// //   <input type="text" onChange={props.update} />
//
// // App.propTypes = {
// //   txt: React.PropTypes.string,
// //   cat: React.PropTypes.number.isRequired
// // }
//
// // App.defaultProps = {
// //   txt: 'this is the default text'
// // }
//
// // const App = () => <h1>Hello stateless</h1>
//
// export default Wrapper
