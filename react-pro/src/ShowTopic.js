import React from 'react'
class ShowTopic extends React.Component{
    render(){
        let tab = {ask:"问答",share:"分享",job:"工作"}
        return(
            <div>
                {data.map((item,i)=> <div key={i}>
                <img src={item.author.avatar_url} alt={item.author.loginname} />
                <span>{item.reply_count}/{item.visit_count}</span>
                <span className="topic-tab">
                {item.top ? '置顶' :
                item.good ? '精华' : tab[item.tab]}
                </span>
                <span>{item.title}</span>
                </div>)}
            </div>
            )
    }
}
export default ShowTopic