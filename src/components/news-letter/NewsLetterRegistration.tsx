import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { emailRegex } from "consts";
import styles from "./newsletter-registration.module.scss";

const NewsLetterRegistration = () => {
  const [error, setError] = useState<string>('')
  const emailRef = useRef<HTMLInputElement>(null)
  
  async function registrationHandler(event: React.FormEvent) {
    event.preventDefault();
    const emailVal = emailRef.current!.value
    if(!emailRegex.test(emailVal)) {
      return setError("Please enter valid email address!")
    }

    const res = await fetch('/api/newsletter',{
      method: 'POST', 
      body: JSON.stringify({email: emailVal}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json()
    emailRef.current!.value = ''
    toast.success(data.message)

  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form className={styles.form} onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="text"
            id="email"
            placeholder="Your email..."
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </section>
  );
};

export default NewsLetterRegistration;
