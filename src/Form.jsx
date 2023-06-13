import React from "react";
function Form(name,matchType,venue,date,team1,team2,status){
    return(
        <>
        <h1> CRICKET CERTIFICATE</h1>
            <h3>Contest Name:{name}</h3>
            <h3> Competition:{matchType}</h3>
            <br/>
            <h3>Venue:{venue}</h3>
            <h3>Date:{date}</h3>
            <h3>{team1} vs {team2}</h3>
            <h4> RESULT : {status} </h4>
        </>
    )
}
export default Form;