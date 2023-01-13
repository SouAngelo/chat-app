import React, { useContext } from 'react'
import {chatContext} from '../contexts/chatContexts'

import { useRouter } from 'next/router'

import axios from 'axios'

import styles from '../../styles/styles.module.css'

export default function Auth() {

  const {username, setUsername, secret, setSecret} = useContext(chatContext)

    const router = useRouter();

    function onSubmit(e) {
        e.preventDefault();
    
        if (username.length === 1 || secret.length === 1) return;
    
        axios
          .put(
            "https://api.chatengine.io/users/",
            { username, secret },
            { headers: { "Private-Key": "fd4d21eb-5d79-42d0-a8a3-681e17b43d75" } }
          )
    
          .then((r) => {
            router.push("/chats");
          });
      }

  return (
    <div className={styles.background}>
      <div className={styles.authContainer}>
        <form className={styles.authForm} onSubmit={(e) => onSubmit(e)}>
          <div className={styles.authTitle}>NextJS Chat</div>

          <div className={styles.inputContainer}>
            <input
              placeholder="Email"
              className={styles.textInput}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className={styles.textInput}
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
