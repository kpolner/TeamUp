
export class PostEventButton extends React.Component {
DeleteEventButton(){
    if(numEvents > 0){
        numEvents = numEvents-1;
    }
}
render() {
    return (
<button class="btn" onClick={()=>this.DeleteEventButton()}><a href="/discover">Delete Event</a></button>
    )    
}
}