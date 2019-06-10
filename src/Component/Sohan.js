import React,{Component} from 'react'
import Army from './WithArms'
 class Sohan extends Component{

    // state = {
    //     gunshots:0
    // }
    // handleGunshots = () =>{
    //     this.setState({
    //         gunshots:this.state.gunshots+1
    //     })
    // }
    render(){
        return(
            <div>
                <h2>Camp :{this.props.camp}</h2>
                <h4 onMouseOver={this.props.hochandleGunshots}>
                Sohan {this.props.hocgunname} 
                is {this.props.hocgunshots} </h4>
            </div>
        )
    }
}

export default Army(Sohan,7)