import React from 'react'


class Work extends React.Component{
    handleBack(){
        console.log(this.props.location.state)
        this.props.history.push(this.props.location.state.from)
    }
    componentDidMount(){
        setTimeout(()=>this.props.history.push('/'),5000)
    }
    render(){
        return(
            <div>
                work
                {this.props.match.params.name}
            </div>
            )
    }
}

export default Work
