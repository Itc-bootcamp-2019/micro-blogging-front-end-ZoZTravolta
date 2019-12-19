import React from "react";
import ChatInput from "../components/chat/ChatInput";
import ChatOutput from "../components/chat/ChatOutput";
import { apiGetAllTweetsFromServer } from "../lib/api";
import { apiAddTweetToServer } from "../lib/api";

export const chatContext = React.createContext();

class Chat extends React.Component {
   constructor() {
      super();
      this.state = {
         tweets: [],
         loading: true,
         error: null,
         addTweetToLocalArray: this.addTweetToLocalArray.bind(this)
      };
   }

   componentDidMount() {
      this.getAllTweetsFromServer();
      setInterval(() => {
         console.log("updating chat..");
         this.getAllTweetsFromServer();
      }, 10000);
   }

   async getAllTweetsFromServer() {
      if (this.state.tweets === []) {
         this.setState({ loading: true });
      }
      try {
         let response = await apiGetAllTweetsFromServer();
         this.setState({ tweets: response.data.tweets });
         this.setState({ loading: false });
      } catch (response) {
         this.setState({ loading: false });
         this.setState({ error: response.response.status });
      }
   }

   async addTweetToServer(content, name) {
      try {
         await apiAddTweetToServer(name, content, new Date().toISOString());
      } catch (response) {
         this.setState({ error: response.response.data });
      }
   }

   addTweetToLocalArray = content => {
      const obj = JSON.parse(localStorage.getItem("UserName"));
      const name = obj.userName;
      const tempTweetsArr = this.state.tweets;
      tempTweetsArr.unshift({
         content: content,
         userName: name,
         date: new Date().toISOString()
      });
      this.saveArrayToLocalStorage();
      this.addTweetToServer(content, name);
   };

   saveArrayToLocalStorage = () => {
      localStorage.setItem(
         "tweets",
         JSON.stringify({ tweets: this.state.tweets })
      );
      this.getTweetsFromLocalStorage();
   };

   getTweetsFromLocalStorage = () => {
      let tweets = JSON.parse(localStorage.getItem("tweets"));
      this.setState({ tweets: tweets.tweets });
   };

   render() {
      return (
         <div className="chat">
            <chatContext.Provider value={this.state}>
               <ChatInput />
               <ChatOutput />
            </chatContext.Provider>
         </div>
      );
   }
}

export default Chat;
