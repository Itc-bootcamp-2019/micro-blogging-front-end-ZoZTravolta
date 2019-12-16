import React from "react";
import ChatOutputItem from "./ChatOutputItem";

const ChatOutput = props => {
   return (
      <ul className="ChatOutputUl">
         {[...props.tweets].reverse().map(tweet => {
            return <ChatOutputItem key={tweet.id} tweet={tweet} />;
         })}
      </ul>
   );
};
export default ChatOutput;
