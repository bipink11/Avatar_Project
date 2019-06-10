import React ,{Component} from 'react'
import ReactDOM from 'react'
import './Demo1.css';
class Demo extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="maindiv_style">
                <h1>Hello {this.props.name}</h1>
                <p>welcome to my page</p>
            </div>
        )
    }
}
export default Demo;