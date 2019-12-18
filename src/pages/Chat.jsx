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
         loading: true,
         error: null
      };
   }

   componentDidMount() {
      this.getAllTweetsFromServer();
   }

   async getAllTweetsFromServer() {
      this.setState({ loading: true });
      try {
         let response = await apiGetAllTweetsFromServer();
         this.setState({ tweets: response.data.tweets });
         this.setState({ loading: false });
      } catch (response) {
         this.setState({ loading: false });
         this.setState({ error: response.response.status });
      }
   }

   async addTweetToServer(content) {
      try {
         await apiAddTweetToServer(
            this.props.userName,
            content,
            new Date().toISOString()
         );
         this.getAllTweetsFromServer();
      } catch (response) {
         this.setState({ error: response.response.data });
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
               error={this.state.error}
            />
         </div>
      );
   }
}

export default Chat;
