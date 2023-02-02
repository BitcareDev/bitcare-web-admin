import React, {useRef, useState, useEffect} from "react";
import './OxygenBarInformedCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';

function OxygenBarInformedCF(){
    var [date,setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear(){
        sigPad.current.clear();
      }
    return(
        <div class="text_ft">
            <div className="bg_consent6">
            <h1 className="consent6_header">Oxygen Bar Informed Consent</h1>
            <div className="consent6_container">
                <div>In consideration of being permitted to participate in any way in the oxygen bar I, for myself, my representatives, assigns, successors, and heirs represent and agree as follows:</div>
                <div>I assume all of the risks of participating in the oxygen bar. If at any time I believe that the oxygen bar is unsafe I will immediately discontinue further participation.</div>
                <div>In permitting me to participate in the oxygen bar, I hereby take action for myself, my executors, administrators, heirs, next of kin, successors, and assigns as follows: (A) Waive, Release and Discharge from any and all liability (B) Indemnify and Hold Harmless the entities or persons mentioned from any and all liabilities or claims made by other individuals or entitles as a result of any of my actions during this event.</div>
                <div>I hereby certify that I have read this document; and, I understand its content. I understand that I have given up substantial rights by signing this AWRL and have signed it freely and without any inducement or assurance of any nature.</div>
                <div>This consent authorization shall expire one year from date of service.</div>
            </div>
            <div className="consent6_date">
                <label for="date" className="consent6_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform6">
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
    );
}

export default OxygenBarInformedCF;