import React from 'react';

function UserDetails(props){

    return(
        <div>
                  
                <p>{props.user.name}</p>
                <p>{props.user.email}</p>
                  
               
           
        </div>
    )

}
export default UserDetails;