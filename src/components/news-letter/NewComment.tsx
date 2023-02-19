import { emailRegex } from "consts";
import React, { useRef, useState } from "react";
import styles from "./new-comment.module.scss";

type Comment = {
  email: string,
  name: string,
  comment: string
}

interface NewCommentProps {
  onAddComment: (comment: Comment) => Promise<any>
}

const NewComment = (props: NewCommentProps) => {
  const [error, setError] = useState('');

  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  function sendCommentHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;
    const enteredName = nameInputRef.current!.value;
    const enteredComment = commentInputRef.current!.value;

    if(enteredName.trim().length < 1) {
      return setError("Please enter valid name!")
    }
    if(!enteredEmail.match(emailRegex)) {
      return setError("Please enter valid email address!")
    }
    if(enteredComment.trim().length < 1) {
      return setError("Please enter valid comment!")
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      comment: enteredComment,
    }).then(data => {
      if(data.message === "Comment successfully added!") {
        emailInputRef.current!.value = ''
        nameInputRef.current!.value = ''
        commentInputRef.current!.value = ''
      }
    });
  }

  return (
    <form className={styles.form} onSubmit={sendCommentHandler} >
      <div className={styles.row}>
        <div className={styles.control}>
          <label htmlFor="email">Your email</label>
          <input type="text" id="email" ref={emailInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="comment">Your comment</label>
        <textarea id="comment" rows={5} ref={commentInputRef}></textarea>
      </div>
      {error.length > 0 && <p className={styles.error} >{error}</p>}
      <button>Submit</button>
    </form>
  );
};

export default NewComment;
