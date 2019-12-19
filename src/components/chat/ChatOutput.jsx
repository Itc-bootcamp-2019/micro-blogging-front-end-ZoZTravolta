import React from "react";
import ChatOutputItem from "./ChatOutputItem";
import { chatContext } from "../../pages/Chat";

const ChatOutput = () => {
   return (
      <chatContext.Consumer>
         {context => {
            return (
               <ul className="ChatOutputUl">
                  {context.loading && (
                     <li className="ChatOutputItem">loading...</li>
                  )}
                  {context.error && (
                     <li className="ChatOutputItem">
                        Sorry, we have an error: {context.error}
                     </li>
                  )}

                  {context.tweets.length !== 0
                     ? [...context.tweets].map(tweet => {
                          return (
                             <ChatOutputItem key={tweet.date} tweet={tweet} />
                          );
                       })
                     : null}
               </ul>
            );
         }}
      </chatContext.Consumer>
   );
};
export default ChatOutput;
