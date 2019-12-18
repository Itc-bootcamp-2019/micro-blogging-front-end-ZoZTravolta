import React from "react";
import ChatInput from "../components/chat/ChatInput";
import ChatOutput from "../components/chat/ChatOutput";
import { apiGetAllTweetsFromServer } from "../lib/api";
import { apiAddTweetToServer } from "../lib/api";

class Chat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         tweets: [],
         loading: true
      };
   }

   componentDidMount() {
      this.getAllTweetsFromServer();
   }

   async getAllTweetsFromServer() {
      this.setState({ loading: true });
      const response = await apiGetAllTweetsFromServer();
      this.setState({ tweets: response.data.tweets });
      this.setState({ loading: false });
   }

   async addTweetToServer(content) {
      let response;
      try {
         response = await apiAddTweetToServer(
            this.props.userName,
            content,
            new Date().toISOString()
         );
         console.log(response.status);
         this.getAllTweetsFromServer();
      } catch {
         console.log(response.status);
      }
   }

   render() {
      return (
         <div className="chat">
            <ChatInput
               sendToAddTweetToServer={this.addTweetToServer.bind(this)}
            />
            <ChatOutput
               tweets={this.state.tweets}
               loading={this.state.loading}
            />
         </div>
      );
   }
}

export default Chat;
