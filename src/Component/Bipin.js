import React,{Component} from 'react'
import Army from './WithArms'
 class Bipin extends Component{

    
    render(){
        return(
            <div>
                <h2>Camp :{this.props.camp}</h2>
                <h4 onMouseOver={this.props.hochandleGunshots}>
                Bipin {this.props.hocgunname}
                 Gunshots:{this.props.hocgunshots}</h4>
            </div>
        )
    }
}

export default Army(Bipin,10)