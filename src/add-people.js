
import React from 'react';
import _ from 'lodash';


export default class AddPeople extends React.Component {

  constructor(props) {
	  super(props);

	  this.state = {
      participants: JSON.parse(localStorage.getItem('participants')) || [],
      person:{
      a:"",
      b:"",
      c:"",
      d:""
    }
    };
	  this.addParticipants = this.addParticipants.bind(this);
	}
  handleChange(property, event) {

    const person = {...this.state.person};
      person[property] = event.target.value;
      this.setState({person: person});
  }

  addParticipants(event) {

    let newParticipant = this.state.person;
    newParticipant.a=this.state.person.a;
    newParticipant.b=this.state.person.b;
    newParticipant.c=this.state.person.c;
    newParticipant.d=this.state.person.d;
this.setState({newParticipant});

let participants=this.state.participants;
participants.push(newParticipant);
this.setState({participants});
console.log (participants);
localStorage.setItem('participants', JSON.stringify(participants));
this.setState({participants:participants});
 this.setState({person:{
  a:"",
  b:"",
  c:"",
  d:""
}
});

	}

    render() {
        return (



            <div >
            <div className="text-center well-sm">
                <form className="form-inline" >

                    <input
                    type="text"
                    ref="id"

                    value={this.state.person.a}
                    onChange={this.handleChange.bind(this, 'a')}
                    className="form-control input-md"
                    placeholder="age" / >
                    <input
                    type="text"
                    ref="Name"

                    value={this.state.person.b}
                    onChange={this.handleChange.bind(this, 'b')}

                    className="form-control input-md"
                    placeholder="Name" / >

                    <input
                    type="text"
                    ref="Email"
                    value={this.state.person.c}
                    onChange={this.handleChange.bind(this, 'c')}
                    className="form-control input-md"
                    placeholder="Email" / >
                    <input type="text"
                    ref="Phone"
                    value={this.state.person.d}
                    onChange={this.handleChange.bind(this, 'd')}
                    className="form-control input-md"
                    placeholder="Phone number" / >

                    <button type="button"
                    onClick={this.addParticipants.bind(this)}
                    className="btn btn-md btn-info " > Add New < /button>


                    </form>
                    </div>

                    <div className="well">

                    </div>

                </div>

        );
    }
}
