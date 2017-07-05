import React from 'react'

import {BrowserRouter,Route,NavLink,Redirect,Switch} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Work from './Work'
import './main.css'
// import Footer from 'Footer'
let NotFound=()=><div>没有，滚</div>
class App extends React.Component{
    render(){
        let user = false
        return(

            <BrowserRouter>
                <div>
                <NavLink to={{
                    pathname:'/',
                    search:'?sort-name',
                    hash:'#the-hash',
                    state:{fromDashbord:true}
                }}>首页</NavLink>
                <NavLink to='/about'>关于</NavLink>
                <NavLink to={{pathname:'/work/sad',state:{from :'/from'}}}>工作</NavLink>
                    <h1>hello wrold</h1>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' render={props => (
                            user ? <About {...props} />:<Redirect to='/404' />
                            )} />
                        <Route path='/work/:name' component={user ? Work : NotFound} />
                        <Redirect to='/about' from="/aboutme" />
                        {/*<Route path='*' component={NotFound} />*/}
                        <Route path='/404' component={NotFound} />
                        <Redirect to='/404' from="*" />
                    </Switch>

                </div>
            </BrowserRouter>
            )
    }
}
export default App


