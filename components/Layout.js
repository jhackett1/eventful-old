import react from 'react'
import { auth } from '../services/firebase'
import Header from './Header'

export default class extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            user: null
        }
    }

    componentDidMount(){
        auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    user: user
                })
            } else {
                this.setState({
                    user: null
                })
            }
        })
    }

    render(){
        return(
            <main>
                <Header user={this.state.user}/>
                {this.props.children}
            </main>
        )
    }
}
