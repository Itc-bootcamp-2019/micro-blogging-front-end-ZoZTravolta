import React from "react";
import ChatInput from "./ChatInput";
import ChatOutput from "./ChatOutput";

class Chat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         tweets: [
            {
               id: "1",
               content: "hello world1",
               userName: "john doe",
               date: "string (ISO date)"
            },
            {
               id: "2",
               content: "hello world22",
               userName: "irena mclafin",
               date: "string (ISO date)"
            }
         ]
      };
   }
   addTweetToArray = newTweet => {
      const tempTweetsArr = this.state.tweets;
      tempTweetsArr.push({
         id: parseInt(tempTweetsArr[tempTweetsArr.length - 1].id) + 1,
         content: newTweet,
         userName: this.props.userName,
         date: new Date().toISOString()
      });
      this.setState({ tweets: tempTweetsArr });
   };
   render() {
      return (
         <div className="chat">
            <ChatInput addTweetToArray={this.addTweetToArray} />
            <ChatOutput tweets={this.state.tweets} />
         </div>
      );
   }
}

export default Chat;
