import React from 'react'
import {Link} from 'react-router-dom'
class ShowTopic extends React.Component{
    render(){
        let tab={
            ask:'问答',
            share:'分享',
            job:'招聘'
        }
        return(
                <div>
                    {
                        this.props.data.map((item,index)=><div key={index}>
                            <Link to={`/user/${item.author.loginname}`}>
                                <img src={item.author.avatar_url} alt={item.author.loginname}/>
                            </Link>
                            <span className='topic-num'>{item.reply_count}/{item.visit_count}</span>
                            <span className='topic-tab'>{
                                item.top ?'置顶' :
                                item.good ? '精华': tab[item.tab]
                            }</span>
                            <span className='topic-title'>
                                <Link to={`/topic/${item.id}`}>{item.title}</Link>
                            </span>
                            </div>

                            )
                    }
                </div>
            )
    }
}
export default ShowTopic