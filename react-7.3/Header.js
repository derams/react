// import Raeact from 'react'
// class Hearder extends React.Component{
//     render(){
//         return(
//             <div>
//                 kk
//             </div>
//         )
//     }
// }
// export default Hearder


import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            user: null,
            isLogin: false,
            token: ''
        }
    }
    handleLogin(){
        axios.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: this.state.token})
            .then( res =>{
                sessionStorage.accesstoken = this.state.token
                this.setState({user: res.data, isLogin: true})
            })
            .catch( err => alert(err))
    }
    handleLogout(){
        this.setState({user: null, isLogin: false, token: ''})
        sessionStorage.removeItem('accesstoken')
    }
    render(){
        let {isLogin, user, token} = this.state
        return(
            <header>
                <h2><Link to='/'>cnode</Link></h2>
                {
                    isLogin ?
                    <div style={{position: 'absolute', right: '0', top: '10px'}}>
                        <img src={user.avatar_url} alt="avatar" style={{width: '30px'}}/>
                        <Link to={`/user/${user.loginname}`}>{user.loginname}</Link>
                        <button onClick={this.handleLogout.bind(this)}>登出</button>
                    </div>
                    :
                    <div style={{position: 'absolute', right: '0', top: '10px'}}>
                        <input type="text" value={token} onChange={e=>this.setState({token: e.target.value})}/>
                        <button onClick={this.handleLogin.bind(this)}>登录</button>
                    </div>
                }
            </header>
        )
    }
}
// 3f77acb1-d753-4393-b784-44913190e6a8
export default Header
