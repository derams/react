import React from 'react'
import Home from './component/Home'
import ShowTopics from './component/ShowTopics'
import './main.css'
import {BrowserRouter,Route} from 'react-router-dom'
import UserInfo from './component/UserInfo'
import Header from 'Header'
import NewTopic from './component/NewTopic'

class App extends React.Component{
    handleLogin(){
        axios.post()
    }
    render(){

        return(
              <BrowserRouter>
                <div>
                    <Header />
                    <h1>cnode header</h1>
                    <Route path='/' exact component={Home}/>
                    <Route path='/topic/:id' component={ShowTopics} />
                    <Route path='/user/:loginname' component={UserInfo} />
                    <Route path='/newtopic' component={NewTopic} />
                    <h1>cnode footer</h1>
                </div>
              </BrowserRouter>
            )
    }
}
export default App