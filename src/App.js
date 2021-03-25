import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './components/Appbar.js';
import './App.css';

// Docs at https://lucasbassetti.com.br/react-simple-chatbot/
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you! What is your favorite playwright?',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    message: "So, you like {previousValue}, do you? Let's play!",
    end: true,
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <ChatBot headerTitle="Speech Recognition" recognitionEnable={true} steps={steps} />
	    </div>
    );
  }
}

export default App; 