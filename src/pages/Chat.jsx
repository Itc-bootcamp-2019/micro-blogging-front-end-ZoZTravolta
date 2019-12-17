import React from "react";
import ChatInput from "../components/chat/ChatInput";
import ChatOutput from "../components/chat/ChatOutput";

class Chat extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         tweets: this.getTweetsFromLocalStorage()
      };
   }

   getTweetsFromLocalStorage = () => {
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
      console.log(tempTweetsArr);
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
            <ChatInput addTweetToArray={this.addTweetToArray} />
            <ChatOutput tweets={this.state.tweets} />
         </div>
      );
   }
}

export default Chat;
