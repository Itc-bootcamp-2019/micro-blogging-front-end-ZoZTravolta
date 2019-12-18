import React from "react";

class ChatInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: "",
         isAlert: false,
         buttonDisabled: true
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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

   handleSubmit(event) {
      this.props.sendToAddTweetToServer(this.state.value);
      event.preventDefault();
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
            <form onSubmit={this.handleSubmit}>
               <textarea onChange={this.handleChange} />
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
         </div>
      );
   }
}
export default ChatInput;
