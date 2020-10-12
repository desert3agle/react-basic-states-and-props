import React, {Component} from 'react';

// mistakes were render(); and no writing return in null part
class Highscore extends Component{
    render(){
        if(this.props.overTen){
            return(
                <div>
                    <h3>High score wohoo!!</h3>
                    <button onClick ={this.props.resetButton}>Reset</button>
                    {/*(e) show action funtion. it will acess as prop from parent 
                        component. which will change the state of prent component
                        (e) => this.state/props.name() or this this.state/props.name 
                        are equiv. doesn't matter where you use what.
                    */}
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default Highscore;