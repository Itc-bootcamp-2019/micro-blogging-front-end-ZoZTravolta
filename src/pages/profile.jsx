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

// import React, { useState } from "react";

// function NameForm(props) {
//    const [name, setName] = useState("");

//    const handleSubmit = evt => {
//       evt.preventDefault();
//       alert(`Submitting Name ${name}`);
//    };
//    return (
//       <form onSubmit={handleSubmit}>
//          <label>
//             Frirst Name:
//             <input
//                type="text"
//                value={name}
//                onChange={e => setName(e.target.value)}
//             />
//          </label>
//          <input type="submit" value="Submit" />
//       </form>
//    );
// }
