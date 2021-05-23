import React, { Component } from 'react'
import DogList from './DogList';
import "./About.css"
export class Home extends Component {
    
    constructor(props){
        super(props);
        this.state={
            dogs:[]
        }
    }
    componentDidMount(){
        fetch("https://dog.ceo/api/breeds/image/random/30").then((res)=> res.json() ).then((data)=>{
            this.setState({
                dogs:data.message
            })
         
        })
        

    }
    render() {
        return (
            <div>
                <div className="header">
                <h1 style={{textAlign:"center", textTransform:"capitalize"}}>
                    Welcome to Dog World
                </h1>
                </div>
                
                <DogList dogs={this.state.dogs}/>
            </div>
        )
    }
}

export default Home
