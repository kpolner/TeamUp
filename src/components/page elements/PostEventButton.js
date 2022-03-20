import * as React from 'react';
import axios from 'axios';
import numEvents from './numEvents';
//Might be buggy
export class PostEventButton extends React.Component {
CreateEventButton(){
        numEvents = numEvents+1;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("staginurl/api/create", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    axios.post(`${baseURL}/1`).then((response) => {
        setPost(response.data);
    });
    axios.get(`${baseURL}/1`).then((response) => {
        setPost(response.data);
    });
    axios.delete(`${baseURL}/1`).then((response) => {
        setPost(response.data);
    });
}
render() {
    return (
<div class="btn" onClick={()=>this.CreateEventButton()}><a href="/discover">Post Event</a></div>
    )    
}
}