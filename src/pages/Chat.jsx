import React from "react";
import ChatInput from "../components/chat/ChatInput";
import ChatOutput from "../components/chat/ChatOutput";
import { getAllTweetsFromServer } from "../lib/api";
import { addTweetToServer } from "../lib/api";

class Chat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         tweets: []
      };
   }

   async componentDidMount() {
      const response = await getAllTweetsFromServer();
      console.log(response.data.tweets);
      this.setState({ tweets: response.data.tweets });
   }
   async sendToAddTweetToServer(content) {
      const response = await addTweetToServer(
         "zoz",
         content,
         new Date().toISOString()
      );
      console.log(response);
   }
   //==================================================
   getTweetsFromLocalStorage = () => {
      this.getTweetsFromServer();
      let tweets = JSON.parse(localStorage.getItem("tweets"));
      if (tweets === null) {
         return [];
      } else {
         return tweets.tweets;
      }
   };

   addTweetToArray = newTweet => {
      const tempTweetsArr = this.state.tweets;
      tempTweetsArr.push({
         id:
            tempTweetsArr.length === 0
               ? 0
               : parseInt(tempTweetsArr[tempTweetsArr.length - 1].id) + 1,
         content: newTweet,
         userName: this.props.userName,
         date: new Date().toISOString()
      });
      this.setState({ tweets: tempTweetsArr });
      this.saveTweetsToLocalStorage();
   };

   saveTweetsToLocalStorage = () => {
      localStorage.setItem(
         "tweets",
         JSON.stringify({
            tweets: this.state.tweets
         })
      );
   };

   render() {
      return (
         <div className="chat">
            <ChatInput sendToAddTweetToServer={this.sendToAddTweetToServer} />
            <ChatOutput tweets={this.state.tweets} />
         </div>
      );
   }
}

export default Chat;
