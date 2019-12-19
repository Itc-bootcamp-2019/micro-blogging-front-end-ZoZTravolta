import React from "react";
import { chatContext } from "../../pages/Chat";

class ChatInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: "",
         isAlert: false,
         buttonDisabled: true
      };

      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      if (event.target.value.length > 140) {
         this.setState({ isAlert: true, buttonDisabled: true });
         return;
      }
      if (event.target.value.length === 0) {
         this.setState({ buttonDisabled: true });
         return;
      }
      this.setState({
         buttonDisabled: false,
         isAlert: false,
         value: event.target.value
      });
   }

   alertBox() {
      return (
         <div className="alert">
            The tweet can't contain more then 140 chars.
         </div>
      );
   }
   render() {
      return (
         <div className="chatInput">
            <chatContext.Consumer>
               {context => (
                  <form
                     onSubmit={event => {
                        this.setState({ value: "" });
                        context.addTweetToLocalArray(this.state.value);
                        event.preventDefault();
                     }}
                  >
                     <textarea
                        onChange={this.handleChange}
                        placeholder="Whats on your mind?"
                        value={this.state.value}
                     />
                     <div className="bottom">
                        <div className="alertPlaceholder">
                           {this.state.isAlert && this.alertBox()}
                        </div>
                        <input
                           type="submit"
                           value="Submit"
                           disabled={this.state.buttonDisabled}
                        />
                     </div>
                  </form>
               )}
            </chatContext.Consumer>
         </div>
      );
   }
}
export default ChatInput;
