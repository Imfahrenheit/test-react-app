import React from 'react';
 export default class Form extends React.Component {
   constructor(props) {
     super(props);
     this.state = {text:{
       e:'hi',
       c:''
     }};
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(property, event) {
     console.log(event.target.value);
     const text = {...this.state.text};
       text[property] = event.target.value;
       this.setState({text: text});
   }

   handleSubmit(event) {
     alert('Text field value is: ' + this.state.text.e);
   }

   render() {
     return (
       <div>
         <div>{this.state.text.e}</div>
         <div>{this.state.text.c}</div>
         <input type="text"
           placeholder="Hello!"
           value={this.state.text.e}
           onChange={this.handleChange.bind(this, 'e')} />
         <input type="text"
           placeholder="Hello!"
           value={this.state.text.c}
           onChange={this.handleChange.bind(this, 'c')} />
         <button onClick={this.handleSubmit}>
           Submit
         </button>
       </div>
     );
   }
 }
