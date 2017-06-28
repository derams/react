import React from 'react'

import {Route,Link} from 'react-router-dom'

const Dijia = ()=> <div>dijia</div>
const Zhang = ()=> <div>zhang </div>
const Niu = ()=> <div>niuming</div>

class About extends React.Component{
    render(){
       let {match}=this.props
        return(
            <div>
                about
                <Link to={match.url}>迪迦  </Link>
                <Link to={`${match.url}/zhang`}>张老师  </Link>
                <Link to={`${match.url}/niu`}>牛老师  </Link>
                <Route path={match.url} exact component={Dijia} />
                <Route path={`${match.url}/zhang`} component={Zhang} />
                <Route path={`${match.url}/niu`} component={Niu} />
            </div>
            )
    }
}


export default About
