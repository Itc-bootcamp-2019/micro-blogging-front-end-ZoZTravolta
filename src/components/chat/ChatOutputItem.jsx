import React from "react";

const ChatOutputItem = props => {
   return (
      <li className="ChatOutputItem">
         <div>
            <div className="info">
               <span>{props.tweet.id}</span>
               <span className="userName">{props.tweet.userName}</span>
               <span className="date">{props.tweet.date}</span>
            </div>
            <div className="tweet">{props.tweet.content}</div>
         </div>
      </li>
   );
};
export default ChatOutputItem;
