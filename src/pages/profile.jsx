import React from "react";

const Profile = props => {
   return (
      <div className="profile">
         <h1>Profile</h1>
         <label>User Name</label>
         <div>
            <input type="text" placeholder={props.userName}></input>
            <button>Save</button>
         </div>
      </div>
   );
};

export default Profile;
