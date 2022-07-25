import './App.css';
import axios from 'axios';
import * as React from 'react';

function App() {
  const [message, setMessage] = React.useState<String>();
  const [email, setEmail] = React.useState<String>();
  const [isDisplay, setIsDisplay] = React.useState<boolean>(true);

  const handlePublish = async (e: any) => {
    console.log('message', message);
    const url =
      'https://w3jw4ti1s2.execute-api.us-east-1.amazonaws.com/dev/sns/pub';
    const data = {
      message: message,
    };
    await axios
      .post(url, data)
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const handleSubscribe = async (e: any) => {
    const url =
      'https://w3jw4ti1s2.execute-api.us-east-1.amazonaws.com/dev/sns/sub';
    const data = {
      mail: email,
    };
    await axios
      .post(url, data)
      .then((res) => {
        console.log('res', res);
        setIsDisplay(false);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <div className='App'>
      <input
        type='email'
        placeholder='email'
        onChange={(e: any) => setEmail(e.target.value)}
      />
      {!isDisplay && (
        <h2 style={{color: 'green'}}>
          Please visit the mail and confirm subscription.
        </h2>
      )}
      <button onClick={handleSubscribe}>GET Subscribe</button>

      <input
        type='text'
        placeholder='your message'
        onChange={(e: any) => setMessage(e.target.value)}
        disabled={isDisplay}
      />
      <button disabled={isDisplay} onClick={handlePublish}>
        Publish Message
      </button>
    </div>
  );
}

export default App;
