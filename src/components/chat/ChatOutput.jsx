import React from "react";
import ChatOutputItem from "./ChatOutputItem";

const ChatOutput = props => {
   return (
      <ul className="ChatOutputUl">
         {props.tweets.length !== 0 ? (
            [...props.tweets].reverse().map(tweet => {
               return <ChatOutputItem key={tweet.id} tweet={tweet} />;
            })
         ) : (
            <li className="ChatOutputItem">No tweets yet</li>
         )}
      </ul>
   );
};
export default ChatOutput;
