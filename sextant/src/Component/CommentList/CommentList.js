import React from 'react'
import CommentListChild from '../CommentListChild/CommentListChild.js'

function CommentList() {
  return (
    <div className="commentList">
        I am the parent CommentList.
        <CommentListChild/>
    </div>
  )
}

export default CommentList