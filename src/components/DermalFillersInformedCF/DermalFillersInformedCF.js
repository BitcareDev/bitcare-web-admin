import React, {useRef, useState, useEffect} from "react";
import './DermalFillersInformedCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';

function DermalFillersInformedCF(){
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
    return(
        <div class="text_ft">
            <div className="bg_consent2">
            <h1 className="consent2_header">Dermal Fillers Informed Consent</h1>
            <div className="consent2_container">
            <div>The purpose of this informed consent form is to provide written information regarding the risks, benefits and alternatives of the procedure named above. This material serves as a supplement to the discussion you have with your healthcare provider. It is important that you fully understand this Information, so please read this document thoroughly. If you have any questions regarding the procedure, ask your healthcare professional prior to signing the consent form.</div>
            <div>Treatment with dermal fillers (such as Revanesse and others) can smooth out facial folds and wrinkles, add volume to the lips, and contour facial features that have lost their fullness due to aging, sun exposure, illness, etc. Facial rejuvenation can be carried out with minimal complications. These dermal fillers are injected under the skin with a very fine needle The results can often be seen immediately.</div>
            <div>Risks and complications: Before undergoing this procedure, understanding the risks is essential. No procedure is completely risk-free. The following risks may occur, but there may be unforeseen risks and risks that are not included on this list. Some of these risks, if they occur, may necessitate hospitalization, and/or extended outpatient therapy to permit adequate treatment. It has been explained to me that there are certain inherent and potential risks and side effects in any invasive procedure and in this specific instance such risks include but are not limited to:</div>
            <div>1) Post treatment discomfort, swelling, redness, bruising, and discoloration;</div>
            <div>2) Post treatment infection associated with any transcutaneous injection;</div>
            <div>3) Allergic reaction;</div>
            <div>4) Reactivation of herpes (cold sores);</div>
            <div>5) Lumpiness, visible yellow or white patches;</div>
            <div>6) Granuloma formation;</div>
            <div>7) Localized necrosis and/or sloughing, with scab and/or without scab if blood vessel occlusion occurs.</div>
            <div className="consent2_text">Pregnancy and Allergies</div>
            <div>I am not aware that I am pregnant. I am not trying to get pregnant. I am not lactating (nursing). I do not have or have not had any major illnesses which would prohibit me from receiving dermal fillers. I certify that I do not have multiple allergies or high sensitivity to medications, including but not limited to lidocaine.</div>
            <div className="consent2_text">Results</div>
            <div>Dermal fillers have been shown to be safe and effective when compared to collagen skin implants and related products to fill in wrinkles, lines and folds in the skin on the face. Its effect can last up to 6 months. Most patients are pleased with the results of dermal fillers use. However, like any esthetic procedure, there is no guarantee that you will be completely satisfied. There is no guarantee that wrinkles and folds will disappear completely, or that you will not require additional treatment to achieve the results you seek.</div>
            <div>The dermal filler procedure is temporary and additional treatments will be required periodically, general within 4-6 months, involving additional injections for the effect to continue. I am aware that follow-up treatments will be needed to maintain the full effects. I am aware the duration of treatment is dependent on many factors including but not limited to: age, sex, tissue conditions, my general health and life style conditions, and sun exposure. The correction, depending on these factors, may last up to 6 months and in some cases shorter and some cases longer. I have been instructed in and understand the post-treatment instructions.</div>
            <div>I understand this is an elective procedure and I hereby voluntarily consent to treatment with dermal fillers for facial rejuvenation, lip enhancement, establish proper lip and smile lines, and replacing facial volume. The procedure has been fully explained to me. I also understand that any treatment performed is between me and the doctor/healthcare provider who is treating me and I will direct all post-operative questions or concerns to the treating clinician. I have read the above and understand it. My questions have been answered satisfactorily. I accept the risks and complictions of the procedure and I understand that no guarantees are implied as to the outcome of the procedure. also certify that if I have any changes in my medical history I will notify the doctor/healthcare professional who treated me immediately.</div>
            <div>My signature also acknowledges that I have received and read a copy of Pre-Care and Post-Care instructions by signing below, I acknowledge that I have read and understand the "Dermal fillers Consent for this procedure, and that I am signing it voluntarily.</div>
            <div>This consent authorization shall expire one year from date of service.</div>
            </div>
            <div className="consent2_date">
                <label for="date" className="consent1_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform2">
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

export default DermalFillersInformedCF;