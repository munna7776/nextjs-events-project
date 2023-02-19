import React, { useState } from 'react'
import styles from "./comment.module.scss"
import CommentList from './CommentList';
import NewComment from './NewComment';

type Comment = {
  name: string,
  email: string,
  comment: string
}

const Comment = (props: { eventId: string}) => {
    const { eventId } = props;

    const [showComments, setShowComments] = useState(false);
  
    function toggleCommentsHandler() {
      setShowComments((prevStatus) => !prevStatus);
    }
  
    async function addCommentHandler(commentData: Comment) {
      const data = {...commentData, eventId}
      console.log(data)
      const res = await fetch('/api/addComment',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const outputData = await res.json()
      return outputData;
    }
  
    return (
      <section className={styles.comments}>
        <button onClick={toggleCommentsHandler}>
          {showComments ? 'Hide' : 'Show'} Comments
        </button>
        {showComments && <NewComment onAddComment={addCommentHandler} />}
        {showComments && <CommentList />}
      </section>
    );
}

export default Comment
