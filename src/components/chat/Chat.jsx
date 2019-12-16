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
   addTweetToArray = () => {};
   render() {
      return (
         <div className="chat">
            <ChatInput />
            <ChatOutput tweets={this.state.tweets} />
         </div>
      );
   }
}

export default Chat;
