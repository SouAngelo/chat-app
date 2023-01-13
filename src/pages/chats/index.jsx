import React, { useState, useEffect, useContext } from "react";
import {chatContext} from '../../contexts/chatContexts';
import dynamic from "next/dynamic";
import { useRouter } from "next/router";


const ChatEngine = dynamic(() =>
import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
import("react-chat-engine").then((module) => module.MessageFormSocial)
);

import styles from './styles.module.css'

export default function Chats() {

  const { username, secret } = useContext(chatContext);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  }, [username, secret]);

  if (!showChat) return <div />;

  return (
    <div className={styles.background}>
      <div className={styles.shadow}>
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="deab29a0-ac5d-4aac-8d1b-e417dab6645b"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );

}
