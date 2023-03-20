import React, {useEffect, useRef, useState} from "react";
import './HydraFacialInformedCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDotFilled } from 'react-icons/rx';

function HydraFacialInformedCF({setSignature}){
    var [date,setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    useEffect(()=>{
        const URL = sigPad.current.getTrimmedCanvas().toDataURL("image/png");
        setSignature(URL)
    },[sigPad])
    
    function clear(){
        sigPad.current.clear();
      }
    return(
        <div class="text_ft">
            <div className="bg_consent8">
            <h1 className="consent8_header">HydraFacial Informed Consent Form</h1>
            <div className="consent8_container">
                <div>Please read and initial each of the statements below:</div>
                <div><RxDotFilled/> I have voluntarily elected to receive a HydraFacial after the nature and purpose of this treatment have been explained to me.</div>
                <div><RxDotFilled/> I understand that a HydraFacial is a type of hydradermabrasion procedure that includes cleansing, exfoliation, extraction, hydration, and antioxidant protection.</div>
                <div><RxDotFilled/> I understand that the HydraFacial can be used to diminish the appearance of fine lines and wrinkles, improve texture/tone, reduce pore size, increase hydration and moisture retention, and give skin a smoother appearance. </div>
                <div><RxDotFilled/> I understand that I will likely see results immediately after treatment and my skin may feel smooth and hydrated for one to four weeks with appropriate home care to maintain treatment results.</div>
                <div><RxDotFilled/> I also recognize there are no guaranteed results and that independent results are dependent upon age, skin condition, and lifestyle, and that there is a possibility may require further treatments of the treated areas to obtain the expected results at an additional cost.</div>
                <div><RxDotFilled/> I understand that I may experience tingling and stinging in the treatment area, but that these sensations are normal and generally subside within a few hours.</div>
                <div><RxDotFilled/> I understand that my skin may experience temporary irritation, tightness, or redness, following this procedure but these are all normal reactions that typically resolve within 72 hours.</div>
                <div><RxDotFilled/> I understand that after treatment, my skin will be more susceptible to sunburn and sun damage. I understand that it is important that I avoid excessive sun exposure and use a minimum of SPF 30 sunscreen.</div>
                <div><RxDotFilled/> I have read and understood the post-treatment home care instructions. I understand how important it is to follow all instructions given to me for post-treatment care. In the event that I may have additional questions or concerns regarding my treatment or suggested home product/post-treatment care, I will consult the esthetician immediately.</div>
                <div><RxDotFilled/> I understand that must avoid the use of aggressive exfoliation, waxing, and products containing glycolic acids or retinol that are not part of the recommended take-home regimen in the treated areas for a minimum of 2 weeks pre and post-treatment.</div>
                <div><RxDotFilled/> I have also, to the best of my knowledge, given an accurate account of my medical history, including all known allergies or prescription drugs or products I am currently ingesting or using topically.</div>
                <div>I have read and fully understand this agreement and all information detailed above. The information provided has been explained to me and all my questions have been answered to my satisfaction. I understand the HydraFacial procedure, accept the risks, and consent to have the treatment done. I agree I will assume the risk and full responsibility for any and all injuries, losses, side effects, or damages that might occur to me while I am undergoing this procedure. I do not hold the esthetician, whose signature appears below, responsible for any of my conditions that were present, but not disclosed at the time of this skincare procedure, which may be affected by the treatment performed today. This consent form is valid for all future HydraFacial treatments. I will alert the staff if there are any future changes to my medical history.</div>
            </div>
            <div className="consent8_date">
                <label for="date" className="consent8_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform8" id='hydra_facial'>
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

export default HydraFacialInformedCF;