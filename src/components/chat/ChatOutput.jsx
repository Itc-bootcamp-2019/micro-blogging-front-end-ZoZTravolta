import React from "react";
import ChatOutputItem from "./ChatOutputItem";

class ChatOutput extends React.Component {
   constructor(props) {
      super(props);
      // this.setState = {
      //    tweets: []
      // };
   }

   render() {
      const tweets = this.props.tweets;
      return (
         <ul className="ChatOutputUl">
            {tweets.map(tweet => {
               return <ChatOutputItem key={tweet.id} tweet={tweet} />;
            })}
         </ul>
      );
   }
}
export default ChatOutput;
