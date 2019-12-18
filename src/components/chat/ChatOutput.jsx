import React from "react";
import ChatOutputItem from "./ChatOutputItem";

const ChatOutput = props => {
   return (
      <ul className="ChatOutputUl">
         {props.loading === true ? (
            <li className="ChatOutputItem">loading...</li>
         ) : null}

         {props.tweets.length !== 0
            ? // [...props.tweets].reverse().map(tweet => {
              //    return <ChatOutputItem key={tweet.date} tweet={tweet} />;
              // })
              //props.loading == true

              [...props.tweets].map(tweet => {
                 return <ChatOutputItem key={tweet.date} tweet={tweet} />;
              })
            : null}
      </ul>
   );
};
export default ChatOutput;
