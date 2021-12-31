import React, { Component } from 'react'
import '../styles.css'

export default class StateinClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"K",
             count:0
            }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({
                name:"MK",
            })
        },5000)
        return (
            <div className='demo'>
                <h1>Welcome {this.state.name}</h1>
                <h1>Count is {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }

                }>Click To Increment</button>
                <br></br>
                <br></br>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }

                }>Click To Decrement</button>
                <br></br>
                <br></br>
                <button onClick={()=>{
                    this.setState({
                        count:0
                    })
                }

                }>Click To Reset</button>
            </div>
        )
    }
}
