import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {

  return (
    <ChatEngine
      height="100vh"
      projectID="6b63ca7d-2bc7-4685-9fa7-06664dbf2a83"
      userName="Admin"
      userSecret="Admin@123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;