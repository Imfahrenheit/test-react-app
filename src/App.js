import React, {
  Component
} from 'react';
import AddPeople from './add-people'

import Participant from './participant'


import './App.css'




class App extends Component {



  render() {
    return (
  <div className="container jumbotron" >
  <p className="text-center"> Please Enter Your Details</p>
<AddPeople/>
<Participant/>






</div>


    );
  }
}

export default App;
