import React from 'react'
import axios from 'axios'
import ShowTopic from './ShowTopic'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            data:[],
            tabs:['all','share','ask','good','job'],
            tab:'all'
        }
    }
    componentDidMount(){
        axios.get('https://cnodejs.org/api/v1/topics')
        .then(res=>this.setState({data:res.data.data}))
        .catch(err=>alert(err))
    }
    handleClick(tab){
        this.setState({tab:tab})
        if(tab==='all'){
            tab=''
        }
        axios.get('https://cnodejs.org/api/v1/topics?tab='+tab)
        .then(res=>this.setState({data:res.data.data}))
        .catch(err=>alert(err))
    }
    render(){
        console.log(this.state.data)
        console.log(this.state.loginname)
        let {data,tabs,tab}=this.state
        let tabSort ={all:'全部',share:'分享',ask:'问答',good:'精华',job:'招聘'}

        return(
                <div className='topic'>
                {
                     tabs.map((item,i)=><button style={{backgroundColor:tab===item?'lightgreen':'#eee'}}key={i} onClick={this.handleClick.bind(this,item)}>{tabSort[item]}</button>)
                }
                    <ShowTopic data={data}/>
                </div>
            )
    }
}
export default Home