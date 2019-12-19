import React, { useState } from "react";

const Profile = props => {
   const [userName, setName] = useState("");

   return (
      <div className="profile">
         <h1>Profile</h1>
         <label>User Name</label>
         <div>
            <input
               type="text"
               placeholder={props.userName}
               onChange={e => setName(e.target.value)}
            ></input>
            <button
               onClick={() => {
                  props.saveNameToLocalStorage(userName);
               }}
            >
               Save
            </button>
         </div>
      </div>
   );
};

export default Profile;
