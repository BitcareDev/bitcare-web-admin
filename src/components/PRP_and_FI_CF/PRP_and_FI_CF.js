import React, {useRef, useState, useEffect} from "react";
import './PRP_and_FI_CF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDotFilled } from 'react-icons/rx';
import { TiTick } from 'react-icons/ti';

function PRP_and_FI_CF(){
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
    });
    const [show,setShow] = useState(false)
    let sigPad = useRef({});
    let data = '';

    function clear(){
        sigPad.current.clear();
      }

      function Check() {
        var chkPassport = document.getElementById("chkPassport");
        if (chkPassport.checked) {
            alert("CheckBox checked.");
        } else {
            alert("CheckBox not checked.");
        }
    }
    return(
        <div class="text_ft">
            <div className="bg_consent1">
            <h1 className="consent1_header">Platelet Rich Plasma and Fibrin Informed Consent</h1>
            <div className="consent1_container">
            <div>This is an informed consent document that has been prepared to help inform you about the Platelet Rich Plasma (PRP) and Platelet Rich Fibrin (PRF) techniques. These procedures offer similar results but have different longevity of results.<br/>
                 PRP and PRF are effective in most cases; no guarantees can be made that a specific patient will benefit from this procedure. Additionally, the nature of cosmetic procedure may require a patient to retum for numerous visits in order to achieve the desired results or to determine whether PRP and PRF may not be completely effective at treating the particular condition. The healing process takes time and the final result won't be readily visible for many months. For 10-12 days this results in the constant release of Growth factors and interleukins which accelerate tissue healing and regenerating processes.</div>
            <div className="consent1_text">I consent to get the following</div>
            <div className="check_box">
            <label for="chkPassport"><input type="checkbox" id="chkPassport" name="remember" onClick={()=>setShow(true)} required/> Platelet Rich Plasma (PRP)</label>
            </div>
            <div className="check_box">
            <label for="chkPassport"><input type="checkbox" id="chkPassport" name="remember" onClick={()=>setShow(true)}/> Platelet Rich Fibrin (PRF)</label>
            </div>
                
            <div className="consent1_text">Indications</div>
            <div>only concerns marketing & promotional material for a product. Physicians are free to use any medical device for any purpose, even a use that the FDA has not approved. PRP and PRF techniques are used to accelerate tissue healing and skin regeneration processes through Blood Concentrate. This proposed use is "Off-label" that is, not specifically approved by the FDA. It is important to understand that the proposed use is not experimental and if suggested by your provider, it is because it is safe and effective.</div>
            <div className="consent1_text">Possible risks and side effects</div>
            <div><RxDotFilled/> Discomfort may be experienced during blood draw where there is a slight pinch to insert the needle for the blood collection as well as during the procedure if PRP and PRF are injected into the site. Repeat injections may be necessary.<br/>
            <RxDotFilled/> Bruising, swelling, and infections with any minimally invasive procedure of the treated area may occur. Skin infection is rare, but always a possibility with any injection or incision into the skin.<br/>
            <RxDotFilled/> Scarring at entry point is extremely rare but must always be considered a possibility when entering the skin. Delayed wound healing and/or scarring may occur.<br/>
            <RxDotFilled/> <strong>Contraindications:</strong> Smokers may have less response to this treatment as toxins in smoke block the response of the Stem Cells. Cell death or Fibrosis may occur.</div>
            <div>I understand that my practitioner may discover other or different conditions, which require additional or different procedures than those planned. I authorize the practitioner and such associates, technical assistants and other health care providers to perform such other procedures which are advisable in their professional judgment.<br/>I understand that the results may relax over time and additional procedures may be required.</div>
            <div>Your consent and authorization for this procedure is strictly voluntary. By signing this informed consent form, you hereby grant authority to your physician/practitioner to use PRP or PRF for regeneration purposes and/or to administer any related treatment as may be deemed necessary or advisable in the diagnosis and treatment of your condition.<br/>
                 The nature and purpose of this procedure along with potential complications and side effects have been fully explained to me. I agree to adhere to all safety precautions and instructions after the treatment. I have been instructed in and understand post treatment instructions. I understand that no refunds will be given for treatments received. No guarantee has been given by anyone as to the results that may be obtained by this treatment.<br/>
                 I accept the risks and complications of the procedure, I certify If any changes occur in my medical history I will notify the office.<br/>
                 This consent form is freely and voluntarily executed and shall be binding upon my spouse, relatives, legal representatives, heirs, administrators, successors and assigns.<br/>
                 Should I have any questions or concems regarding my treatment / results, I will notify this office immediately so that timely follow-up and intervention can be provided.</div>
            <div className="consent1_text">Treatment</div>
            <div><TiTick/> Approximately 10 cc of whole blood is drawn from your arm.<br/>
            <TiTick/> The tubes of blood are centrifuged to separate the component cells. Platelets, Leukocytes and Mesenchymal stem cells are separated and used for this procedure.<br/>
            <TiTick/> The liquid is then transferred into a syringe and injected using a tiny needle.</div>
            <div>This consent authorization shall expire one year from date of service.</div>
            </div>
            <div className="consent1_date">
                <label for="date" className="consent1_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform1">
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
                <div className="btn-next">
                    {
                        show?<button type="submit" className="next" onClick={()=>Check()}>submit</button>:null
                    }
                </div>
            </div>
        </div>
    );
}

export default PRP_and_FI_CF;