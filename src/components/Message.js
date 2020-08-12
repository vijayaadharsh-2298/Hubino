import React from 'react';

import MessageDisplay from './MessageDisplay';
import MessageForm from './MessageForm';
//import ChatBot from './ChatBot';

const Message = (props) => {
    return(
        <div className="container">
            <MessageDisplay />
            <MessageForm />
        </div>
    )
}

export default Message;