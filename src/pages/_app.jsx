import ChatProvider from "../contexts/chatContexts";

export default function App({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Component {...pageProps} />
    </ChatProvider>
  );
}
