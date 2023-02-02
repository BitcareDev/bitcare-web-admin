import React, {useRef, useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import Cdata from "../../data/Cdata";
import './Consent-1.css';

export default function ConsentForm_1(props) {
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
    });
    let sigPad = useRef({});
    let data = '';

    function clear(){
        sigPad.current.clear();
      }
    return(<>
    <div class="text_ft">
            <div className="bg_consent">
            <h1 className="consent_header">Consent Form</h1>
            <div className="consent_container">
            {Cdata.map(function (doc, idx) {
                return (
                  <>
                   {doc.heading ? <div className="consent_text">{doc.heading}</div> : ""}
                   {doc.text ? <div className="Sub_consent">{doc.text}</div> : ""}
            </>
             )
            })}
            </div>
            <div className="txt">I HAVE READ OR HAD READ TO ME THIS CONSENT FORM, AND UNDERSTAND AND ACCEPT ITS TERMS.</div>
            <div className="consent_date">
                <label for="date" className="consent_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform">
                <SignaturePad
                    ref={sigPad}
                    penColor="black"
                />
                </div>
                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                    <div class="col">
                        <button type="button" id="clear_btn" onClick={clear}><span class="glyphicon glyphicon-remove" ></span> Clear</button>
                    </div>
                    <div class="col">
                    <button type="submit" id="save_btn"><span class="glyphicon glyphicon-ok"></span> Save & Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}