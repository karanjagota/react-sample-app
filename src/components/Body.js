import React from 'react';
import { Link } from 'react-router-dom';

const name_array = ['Karan','Gaurav','Anoop','Rishika','Natasha','Akhil','Sahil','Akash'];

class Body extends React.Component{    

    state = {
        names:name_array,
        text_val:''
    } 
    handle_change = (event)=>{
        this.setState({text_val:event.target.value})
    }

    render(){
        return(
            <div>
                This is the body of our app . Put anything in here ...
                <p>Put JS inside the curly Bracket like {5+5} </p>     
                <p> Loop thenm over like ... 
                    {name_array.map((person)=>{
                        return <ol key={person}> {person}</ol>
                    })}
                </p>
                <p> 
                   we can also access elements from the state ...<br/><br/> 
                   {this.state.names} 
                </p>
                <form>
                    <input type="text" value={this.state.text_val} onChange={this.handle_change}/>
                </form>
                    {`state : text_val value is = ${this.state.text_val}`}<br/>
                <p>Now you can see how powerfull react is !! <br/>
                    <Link to="/nextpage"> Clcik this to go onto next page ... </Link>
                </p>
                
            </div>
        );
    }
}

export default Body;