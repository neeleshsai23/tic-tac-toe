import React, { Component } from "react";
import GameBoard from "./gameboard";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            isClicked:false,
        }
    }

    openBoard=()=>{
        this.setState({
            isClicked:true,
        })
    }

    render(){
        return(
            <div className="wrapper">
                <header className="title">
                    <h1>TIC-TAC-TOE</h1>
                </header>
                <div className="play">
                    {!this.state.isClicked && <button type="button" className="playbtn" onClick={this.openBoard}>Play</button>}
                    {this.state.isClicked && <GameBoard/>}
                </div>
            </div>
        )
    }
}

export default Home;