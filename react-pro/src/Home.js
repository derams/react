import React from 'react'


class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            data: [],
            tabs: ['all', 'share', 'ask', 'job', 'good'],
            tab: 'all'
        }
    }
    componentDidMount(){
        axios.get('https://cnodejs.org/api/v1/topics')
            .then( res => this.setState({data: res.data.data}) )
            .catch( err => alert(err) )
    }
    handleClick(tab){
        // console.log(tab)
        this.setState({tab: tab})
        if (tab==='all') {tab=''};
        axios.get('https://cnodejs.org/api/v1/topics?tab='+tab)
            .then( res => this.setState({data: res.data.data}) )
            .catch( err => alert(err) )
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

