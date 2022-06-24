import './App.css';
import axios from 'axios';
import * as React from 'react';

function App() {
  const [message, setMessage] = React.useState<String>();
  const [email, setEmail] = React.useState<String>();

  const headers = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'content-type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    Accept: '*/*',
  };

  const handlePublish = async (e: any) => {
    console.log('message', message);
    const url =
      'https://924rac1219.execute-api.us-east-1.amazonaws.com/publish';
    const data = {
      message: message,
    };
    await axios.post(url, data, {
      headers,
    });
  };

  const handleSubscribe = async (e: any) => {
    const url =
      'https://924rac1219.execute-api.us-east-1.amazonaws.com/subscribe';
    const data = {
      email: email,
    };
    await axios.post(url, data, {
      headers,
    });
  };

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='email'
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>GET Subscribe</button>

      <input
        type='text'
        placeholder='your message'
        onChange={(e: any) => setMessage(e.target.value)}
      />
      <button onClick={handlePublish}>Publish Message</button>
    </div>
  );
}

export default App;
