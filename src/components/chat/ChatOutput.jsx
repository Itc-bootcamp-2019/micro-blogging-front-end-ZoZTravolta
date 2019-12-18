import React from "react";
import ChatOutputItem from "./ChatOutputItem";

const ChatOutput = props => {
   return (
      <ul className="ChatOutputUl">
         {console.log(props.tweets)}
         {props.tweets.length !== 0 ? (
            // [...props.tweets].reverse().map(tweet => {
            //    return <ChatOutputItem key={tweet.date} tweet={tweet} />;
            // })
            [...props.tweets].map(tweet => {
               return <ChatOutputItem key={tweet.date} tweet={tweet} />;
            })
         ) : (
            <li className="ChatOutputItem">loading...</li>
         )}
      </ul>
   );
};
export default ChatOutput;
