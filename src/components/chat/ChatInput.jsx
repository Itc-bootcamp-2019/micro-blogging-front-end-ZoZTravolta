import React from "react";

class ChatInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: "",
         isAlert: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      if (event.target.value.length > 10) {
         this.setState({ isAlert: true });
      } else {
         this.setState({ isAlert: false });
         this.setState({ value: event.target.value });
      }
   }

   handleSubmit(event) {
      alert("A name was submitted: " + this.state.value);
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
                     disabled={this.state.isAlert}
                  />
               </div>
            </form>
         </div>
      );
   }
}
export default ChatInput;
