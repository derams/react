import React from 'react'
class NewTopic extends React.Component{
    render(){
        return(
            <div>
                <label htmlFor="title">标题（大于10个字符）</label><br/>
                <input type="text" id='title' />
            </div>
        )
    }
}
export default NewTopic