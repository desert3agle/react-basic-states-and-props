import React, {Component} from 'react';
import Highscore from './Highscore';
import './style/stylesheet.css';

class Newproj extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0, 
            overTen: false
        }
    }
    componentDidUpdate(props, state){
        // prop are new prop , state is old 
        // props and states are objects
        // did update me state.name purana as it did update. this.state.name naya .. as it updated
        console.log("did update", state.count, this.state.count);
        if(this.state.count > 10 && this.state.count != state.count && this.state.overTen == false){
            this.setState({overTen : true});
        }
    }
    componentWillUpdate(props, state){
        // will update me state.name naya, this.state.name purana , as it will update
        console.log("will update",state.count, this.state.count);
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1});
    }
    resetButton = () => {
        this.setState({count: 0, overTen: false});
    }
    render(){
        let {count} = this.state;
        
        return(
            <div>
                {
                    // learned self closing tag diff, className, () => this.fun(), single jsx return, 
                    // recursion in component did update. to prevent it
                    // writing conditions in html
                    // onclicsk action
                }

                <h1 className="heading">No of times button clicked : {count}</h1>
                <Highscore 
                    overTen = {this.state.overTen}
                    resetButton = {this.resetButton}
                />
                {/*(e) => this.resetButton() is eqv to this.resetButton
                    since don't have to pass anything. it will capture the event 'e'
                    which you don't write its ok.
                */}
                <div>
                    <button className = "one" onClick = {this.handleClick}>
                        Click me!
                    </button>
                    
                    {/*mistake : span one*/}
                </div>
            </div>
        );
    }
}
export default Newproj;