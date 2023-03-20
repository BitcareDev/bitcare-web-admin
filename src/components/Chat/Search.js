import React, { useContext, useState } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
  } from "firebase/firestore";
  import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";

const Search = () => {

    const [username,setUsername]=useState('')
    const [user,setUser]=useState(null)
    const [err,setErr]=useState(false)

    const {currentUser}=useContext(AuthContext);

    const handleSearch = async () => {
        console.log("user name: ",username)
        const q = query(
          collection(db, "users/userProfiles/AllUsers"),
          where("name", "==", username)
        );
        console.log("Query: ",q)
    
        try {
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
        console.log("doc: ",doc)

            setUser(doc.data());
          });
        } catch (err) {
          setErr(true);
        }
      };
    
      const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
      };

      const handleSelect = async () => {
        console.log("User: ",user)
        console.log("Admin: ",currentUser)
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =user.userID +'_'+ currentUser.uid;
        try {
          const res = await getDoc(doc(db, "chats", user.userID));
    
          if (!res.exists()) {
            //create a chat in chats collection
            await setDoc(doc(db, "chats", user.userID), { });
            const result=await getDoc(doc(db, "userChats", user.userID));
            if (!result.exists())
            await setDoc(doc(db, "userChats", user.userID), {  });
            // await setDoc(doc(db, "userChats", user.userID), {  });
    
            //create user chats
            await updateDoc(doc(db, "userChats", user.userID), {
              [combinedId + ".userInfo"]: {
                uid: user.userID,
                displayName: user.name,
                photoURL: user.imageUrl,
              },
              [combinedId + ".date"]: serverTimestamp(),
            });
    
            // await updateDoc(doc(db, "userChats", user.userID), {
            //   [combinedId + ".userInfo"]: {
            //     uid: currentUser.uid,
            //     displayName: currentUser.name,
            //     photoURL: currentUser.imageUrl,
            //   },
            //   [combinedId + ".date"]: serverTimestamp(),
            // });
          }
        } catch (err) {}
    
        setUser(null);
        setUsername("")
      };

    return (
        <div className="search">
            <div className="searchForm">
                <input type='text' placeholder="Find a user"
                onKeyDown={handleKey}
                onChange={(e) => setUsername(e.target.value)}
                value={username}/>
            </div>
      {err && <span>User not found!</span>}
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.imageUrl} alt=''/>
                <div className="userChatInfo">
                    <span>{user.name}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search;