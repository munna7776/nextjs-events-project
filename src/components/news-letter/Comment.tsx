import React, { useState } from 'react'
import styles from "./comment.module.scss"
import CommentList from './CommentList';
import NewComment from './NewComment';

const Comment = (props: any) => {
    const { eventId } = props;

    const [showComments, setShowComments] = useState(false);
  
    function toggleCommentsHandler() {
      setShowComments((prevStatus) => !prevStatus);
    }
  
    function addCommentHandler(commentData) {
      // send data to API
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
