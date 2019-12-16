import React from "react";
import ChatOutputItem from "./ChatOutputItem";

const ChatOutput = props => {
   const tweets = props.tweets;
   return (
      <ul className="ChatOutputUl">
         {tweets.map(tweet => {
            return <ChatOutputItem key={tweet.id} tweet={tweet} />;
         })}
      </ul>
   );
};
export default ChatOutput;
