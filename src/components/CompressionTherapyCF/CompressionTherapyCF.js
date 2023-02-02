import React, {useRef, useState} from "react";
import './CompressionTherapyCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDotFilled,RxDash } from 'react-icons/rx';

function CompressionTherapyCF(){
    var [date,setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear(){
        sigPad.current.clear();
      }
    return(
        <div class="text_ft">
            <div className="bg_consent7">
            <h1 className="consent7_header">Compression Therapy Consent</h1>
            <div className="consent7_container">
                <div>Compression therapy is a non-invasive modality proven to increase circulation and range of motion, reduce pain and soreness, boost pressure to pain threshold and clear lactate and metabolites from the limbs after physical activity. This modality pairs compression with a sophisticated massage pattern, employing three key forms of biomimicry, including pulsing, gradients, and distal release.</div>
                <div><RxDotFilled/> The pulsing action uses dynamic compression, effectively mimicking the muscle pump of the legs and arms, to greatly enhance the movement of fluid and metabolites out of the limbs.</div>
                <div><RxDotFilled/> Hold pressures are used, similar to the one-way valves of veins and lymphatic vessels, to prevent fluid, backflow, and enhance the natural circulatory flow.</div>
                <div><RxDotFilled/> The distal release feature releases hold pressures once they are no longer needed, ensuring that each portion of the limb gains maximal rest time without a significant pause between compression cycles. Once you are set up on the devices, you will first experience a pre-inflate cycle, during which the attachments fill with air to calibrate and mold to their exact body shape. The session will then begin by compressing your feet or hands (depending on which attachment you are using). Similar to the kneading and stroking done during a massage, each segment of the attachment will first compress in a pulsing manner and then release. This will repeat for each segment of the attachment as the compression pattern works its way up the limb. This stimulates blood flow, massages the muscles, and works in harmony with the body's circulatory system to mobilize fluid out of the extremities and back up towards the heart. I understand the above and consent to treatment This form is a tool to help your clinician determine if you are a candidate for compression therapy.</div>
                <div className="consent7_text">Contraindications:</div>
                <div><RxDash/> wounds, contusions or abrasions;</div>
                <div><RxDash/> recent surgery and have sutures or stiches</div>
                <div><RxDash/> severe atherosclerosis, acute deep vein thrombosis, or other ischemic vascular diseases</div>
                <div><RxDash/> congestive cardiac failure</div>
                <div><RxDash/> existing pulmonary embolism or pulmonary edema</div>
                <div><RxDash/> local skin condition such as gangrene, untreated or infected wounds, recent skin graft or dermatitis</div>
                <div><RxDash/> lymphangiosarcoma</div>
                <div>This consent authorization shall expire one year from date of service.</div>
            </div>
            <div className="consent7_date">
                <label for="date" className="consent7_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform7">
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

export default CompressionTherapyCF;