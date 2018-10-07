import react from 'react'
import styled from 'styled-components'
// import Sidebar from './Sidebar'

const Header = styled.header`
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
`

const Avatar = styled.img`
    border-radius: 100%;
    width: 45px;
    height: 45px;
`

export default class extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            sidebarOpen: false,
            profileOpen: false
        }
    }

    render(){
        return(
            <Header>
                <button onClick={()=>{
                    this.setState({
                        sidebarOpen: !this.state.sidebarOpen
                    }) 
                }}>Menu</button>
                {(this.props.user) ? 
                    <Avatar src={this.props.user.photoURL}/>
                : ""}
                {/* <Sidebar open={this.state.sidebarOpen}/> */}

            </Header>
        )
    }
}