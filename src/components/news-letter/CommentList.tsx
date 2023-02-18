import React from 'react'
import styles from "./comment-list.module.scss"

const CommentList = () => {
  return (
    <ul className={styles.comments}>
      {/* Render list of comments - fetched from API */}
      <li>
        <p>My comment is amazing!</p>
        <div>
          ~ By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          ~ By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList