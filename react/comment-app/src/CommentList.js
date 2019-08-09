import React, { Component,PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                <Comment
                    comment={comment}
                    key={i}
                    index={i}
                    onDeleteComment={this.handleDeleteComment.bind(this)} />
                )}
            </div>
        )
    }
}

export default CommentList