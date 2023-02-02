import { useState } from "react"
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../index";

export default function ServicesPage(props) {
  const {search}=props;
  console.log("Search: ",search)  
  const [isNew,setIsNew]=useState(false);
    const [service,setService]=useState('');

    return (<>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Services</h4>
          <button
            className="add-provider-btn"
            onClick={() => setIsNew(true)}
          >
            Add service
          </button>
        </div>
        {isNew?<div>
            <input type={'text'} onChange={(e)=>setService(e.target.value)}/>
            <button style={{marginLeft:'10px'}}
            onClick={async()=>await addDoc(collection(db, "ClinicServices"), {name:service})}>submit</button>
        </div>:<div class="container px-4" style={{ marginTop: "30px" }}>
                <div class="row gx-5 gy-3">
                  <div class="col-md-6 col-sm-6 item">
                    service page
                  </div>
                  <div class="col-md-6 col-sm-6 item">
                  service page
                  </div>
                  </div>
                  </div>}
      </>)
}
