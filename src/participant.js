import React from 'react';


export default class Participant extends React.Component {


  constructor(props) {
	  super(props);

	  this.state = {
	  	participants : JSON.parse(localStorage.getItem('participants')) || []
	  };
	}
  displayParticipant(...participants) {


		this.state.participants.map((person, i) => {
			console.log(person);
return (
      <tbody>  <tr className="default">

        <td key={i}> {person.a}</td>
        <td key={i}> {person.b}</td>
        <td key={i}> {person.c} </td>
        <td key={i}> {person.d}</td>
        <td> <button className=" btn btn-success btn-xs glyphicon glyphicon-pencil"> </button>

        </td>
        </tr>
        </tbody>)




    })

  };
    render() {
        return (


          <div className="table-responsive  ">

            <table className="table ">


                <thead>
                   <tr className="default">

                         <th> Age </th>
                         <th> Name </th>
                         <th> Email </th>
                         <th> Phone Number </th>
                         <th> Manage

                         
                         <button onClick={this.displayParticipant.bind(this)}className="btn btn-danger btn-xs glyphicon glyphicon-trash"> </button>
                         </th>

                   </tr>

                </thead>

                <tbody>
              {this.displayParticipant()}
                </tbody>

          </table>
    </div>
        );
    }
}
