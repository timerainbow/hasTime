import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    constructor(){
        super()
        this.state = { timeString:'' }
    }

    componentWillMount () {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    _updateTimeString(){
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime)/1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration/60)} 分钟前`
                : `${Math.round(Math.max(duration,1))} 秒前`
        })
    }

    render () {
        const comment = this.props.comment
        return(
            <div>
                {comment.username} : {comment.content} 
                <div className="comment-createTime">{this.state.timeString}</div>
            </div>
        )
    }

}

export default Comment