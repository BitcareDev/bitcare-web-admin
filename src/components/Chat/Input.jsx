import React,{useState,useEffect,useContext} from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ChatContext } from "../../Context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
    const [textMsg, setTextMsg] = useState("");
    const [img, setImg] = useState(null);
  
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
  
    const handleSend = async () => {
        const id = db.collection(`chats/${data.user.uid}/messages`).document().getId();
      if (img) {
        const storageRef = ref(storage, uuid());
  
        const uploadTask = uploadBytesResumable(storageRef, img);
  
        uploadTask.on(
          (error) => {
            //TODO:Handle Error
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
db.collection(`chats/${data.user.uid}/messages`).document(id).set({
    _id: uuid(),
    text:textMsg,
    senderId: currentUser.uid,
    receiverId:data.user.uid,
    createdAt: Timestamp.now(),
    img: downloadURL,
  });
            });
          }
        );
      } else {
        db.collection(`chats/${data.user.uid}/messages`).document(id).set({
            _id: uuid(),
            text:textMsg,
            senderId: currentUser.uid,
            receiverId:data.user.uid,
            createdAt: Timestamp.now(),
          });
      }
  
      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text:textMsg,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
  
    //   await updateDoc(doc(db, "userChats", data.user.uid), {
    //     [data.chatId + ".lastMessage"]: {
    //       text,
    //     },
    //     [data.chatId + ".date"]: serverTimestamp(),
    //   });
  
      setTextMsg("");
      setImg(null);
    };
    return (
        <div className="input">
            <input type={'text'} placeholder='Type something...'
            onChange={(e) => setTextMsg(e.target.value)}
            value={textMsg}/>
            <div className="send">
                <img src='../assets/icons8-attach-30.png' alt=''/>
                <input type={'file'} style={{display:'none'}} id='file'
                onChange={(e) => setImg(e.target.files[0])}/>
                <label htmlFor="file">
                <img src='../assets/icons8-image-50.png' alt=''/>
                </label>
                <img src='../assets/icons8-send-25.png' alt='' onClick={handleSend}/>
            </div>
        </div>
    )
}

export default Input;