import React from 'react';
import Participant from './participant'

export default class AddedParticipants extends React.Component {
    render() {
        return (
          <div className="table-responsive  ">

            <table className="table ">


                <thead>
                   <tr className="default">

                         <th> Age </th>
                         <th> Name </th>
                         <th> Email </th>
                         <th> Phone Number  </th>
                         <th> Manage </th>

                   </tr>

                </thead>

                <tbody>
                
                </tbody>

          </table>
    </div>
        );
    }
}
