import React, {useRef, useState, useEffect} from "react";
import './CryoskinCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDash } from 'react-icons/rx';

function CryoskinCF(){
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
            <div className="bg_consent4">
            <h1 className="consent4_header">Cryoskin Consent Form</h1>
            <div className="consent4_container">
            <div>By engaging BitCare Clinic and MedSpa (for the purposes hereof referred to together herein as the "Company") to provide cryotherapy, infrared sauna and related services ("Services") and using the Company's equipment and facilities in relation thereto, I hereby acknowledge on behalf of myself, my heirs, personal representatives and/or assigns, that there are certain inherent risks and dangers associated with receiving Services and my use of the Company's equipment and facilities. At all times, I shall comply with all stated and customary terms, posted safety signs, rules, and verbal instructions given to me by staff. If in the subjective opinion of the Company's staff, I would be at physical risk in receiving Services, I understand and agree that I may be denied access to Services until I furnish the Company with an opinion letter from my medical doctor, at my sole cost and expense, specifically addressing the Company's concerns and stating that the Company's concerns are unfounded.</div>
            <div>I hereby (1) agree to assume full responsibility for any and all injuries or damage which are sustained or aggravated by me in relation to my receiving of the Services, (2) Release, indemnify, and hold harmless the Company, its direct and indirect parent, subsidiary affiliate entities, and each of their respective officers, directors, members, employees, representatives and agents, and each of their respective successors and assigns and all others, from any and all responsibility, claims, actions, suits, procedures, costs, expenses, damages, and liabilities to the fullest extent allowed by law arising out of or in any way related to the Services, and (3) Represent that: (a) I have no medical or physical condition that would prevent me from receiving the Services, (b) I do not have a physical or mental condition that would put me in any physical or medical danger, (c) I have not been instructed by a physician to not receive Services, (d) No warranty or guarantee, or other assurance, has been made to me covering the results of the Services, (e) Knowing the risks involved I nevertheless chose to voluntarily request the Services. Not withstanding the foregoing (and by way of illustration only and not limitation) if any of the following apply to me or if I'm unsure for any reason, I here by acknowledge the Company's recommendation that I consult a medical physician before receiving Services.</div>
            <div className="consent4_text">Please initial on the designated lines below:</div>
            <div className="consent4_text">Cryoskin CryoSlimming:</div>
            <div className="subText">
            <div><RxDash/> Severe Raynaud's Syndrome</div>
            <div><RxDash/> Severe Allergy to Cold</div>
            <div><RxDash/> Cold-related Illness (Cryoglobulinemia, Paroxysmal Cold Hemoglobinuria, Cold Agglutinin Disease)</div>
            <div><RxDash/> Progressive Diseases (MS, ALS, Parkinson's, Neuropathy)</div>
            <div><RxDash/> Active Cancer</div>
            <div><RxDash/> HIV/AIDS</div>
            <div><RxDash/> Cardiovascular Disease</div>
            <div><RxDash/> Lower Limb Ischemia</div>
            <div><RxDash/> Lymphatic Disorders</div>
            <div><RxDash/> Uncontrolled Diabetes or Diabetes-related complications</div>
            <div><RxDash/> Severe Kidney or Liver Disease</div>
            <div><RxDash/> Pregnancy/Breastfeeding</div>
            <div><RxDash/> Bacterial and viral infections of the skin</div>
            <div><RxDash/> Wound healing disorders</div>
            <div><RxDash/> Circulatory disorders</div>
            <div><RxDash/> Surgery in the past 6 months</div>
            <div><RxDash/> Pacemaker/metal implants</div>
            <div><RxDash/> Active/Severe Eczema, rashes, or dermatitis</div>
            <div><RxDash/> Use of topical antibiotics in desired treatment area</div>
            <div><RxDash/> Silicone/other implants in desired treatment area</div>
            <div><RxDash/> Mesh inserts in the desired treatment area</div>
            <div><RxDash/> Irremovable body piercings in the desired treatment area</div>
            <div><RxDash/> Incision scar(s) in the desired treatment area</div>
            <div><RxDash/> Open or infected wounds</div>
            <div><RxDash/> Impaired skin sensation</div>
            <div><RxDash/> Known sensitivity or allergy to propylene glycol</div>
            <div><RxDash/> Hernia in or adjacent to desired treatment area</div>
            <div><RxDash/> Active implanted device such as pacemaker or defibrillator in or adjacent to desired treatment area</div>
            </div>
            <div><b>*I have read and acknowledged the contraindications of Cryoskin Slimming.<br/>Initial:</b></div>

            <div className="consent4_text">Cryoskin CryoToning:</div>
            <div className="subText">
            <div><RxDash/> Severe Raynaud's</div>
            <div><RxDash/> Severe Allergy to Cold</div>
            <div><RxDash/> Cold-related Illness (Cryoglobulinemia, Paroxysmal Cold Hemoglobinuria, Cold Agglutinin Disease)</div>
            <div><RxDash/> Progressive Diseases (MS, ALS, Parkinson's, Neuropathy)</div>
            <div><RxDash/> Pregnancy/Breastfeeding</div>
            <div><RxDash/> Cardiovascular Disease or Lower Limb Ischemia</div>
            <div><RxDash/> Bacterial and viral infections of the skin</div>
            <div><RxDash/> Wound healing disorders</div>
            <div><RxDash/> Circulatory disorders</div>
            <div><RxDash/> Surgery in the past 6 months</div>
            <div><RxDash/> Pacemaker/metal implants</div>
            <div><RxDash/> Active/Severe Eczema, rashes, or dermatitis</div>
            <div><RxDash/> Silicone/other implants in desired treatment area</div>
            <div><RxDash/> Use of topical antibiotics in desired treatment area</div>
            <div><RxDash/> Mesh inserts in the desired treatment area</div>
            <div><RxDash/> Irremovable body piercings in the desired treatment area</div>
            <div><RxDash/> Impaired skin sensation</div>
            <div><RxDash/> Open or infected wounds</div>
            <div><RxDash/> Known sensitivity or allergy to propylene glycol.</div>
            <div><RxDash/> Active implanted device such as pacemaker or defibrillator in or adjacent to desired treatment area</div>
            </div>
            <div><b>*I have read and acknowledged the contraindications of Cryoskin Toning.<br/>Initial:</b></div>

            <div className="consent4_text">Cryoskin CryoFacial:</div>
            <div className="subText">
            <div><RxDash/> Severe Raynaud's</div>
            <div><RxDash/> Severe Allergy to Cold</div>
            <div><RxDash/> Cold-related Illness (Cryoglobulinemia, Paroxysmal Cold Hemoglobinuria, Cold Agglutinin Disease)</div>
            <div><RxDash/> Progressive Diseases (MS, ALS, Parkinson's, Neuropathy)</div>
            <div><RxDash/> Cardiovascular Disease or Lower Limb Ischemia</div>
            <div><RxDash/> Botox in the past 30 days</div>
            <div><RxDash/> Fillers in the past 90 days.</div>
            <div><RxDash/> PDO threads in the pas 90 days</div>
            <div><RxDash/> Bacterial and viral infections of the skin</div>
            <div><RxDash/> Wound healing disorders</div>
            <div><RxDash/> Circulatory disorders</div>
            <div><RxDash/> Metal implants</div>
            <div><RxDash/> Surgery in the past 6 months</div>
            <div><RxDash/> Active/Severe Eczema, rashes, or dermatitis</div>
            <div><RxDash/> Silicone/other implants in desired treatment area</div>
            <div><RxDash/> Use of topical antibiotics in desired treatment area</div>
            <div><RxDash/> Irremovable body piercings in the desired treatment area.</div>
            <div><RxDash/> Impaired skin sensation</div>
            <div><RxDash/> Open or infected wounds</div>
            <div><RxDash/> Known sensitivity or allergy to propylene glycol</div>
            <div><RxDash/> Active implanted device such as pacemaker or defibrillator in or adjacent to desired treatment area</div>
            </div>
            <div><b>*I have read and acknowledged the contraindications of Cryoskin Facial.<br/>Initial:</b></div>

            <div className="consent4_text">Electrical Muscle Stimulation (E-Stim):</div>
            <div className="subText">
            <div><RxDash/> Pregnancy/Breastfeeding</div>
            <div><RxDash/> Pacemaker</div>
            <div><RxDash/> Cancer</div>
            <div><RxDash/> Current or recent bleeding/hemorrhage</div>
            <div><RxDash/> Active Tuberculosis</div>
            <div><RxDash/> Thrombophlebitis or Thrombosis</div>
            <div><RxDash/> Open wounds</div>
            <div><RxDash/> Compromised Circulation</div>
            <div><RxDash/> Regenerating nerves</div>
            <div><RxDash/> Altered tissue sensation</div>
            <div><RxDash/> Impaired mental status</div>
            <div><RxDash/> Presence of any implanted electrical devices</div>
            </div>
            <div><b>*I have read and acknowledged the contraindications of Electrical Muscle Stimulation.<br/>Initial:</b></div>
            <div className="consent4_text">If you have a serious health concern not listed, please consult with your physician before receiving treatments.</div>
            <div>In participating in the Services, you may be photographed, videoed or otherwise recorded by the Company for safety, monitoring and training purposes. You hereby consent to such usage of your Imagery for all and any such purpose by the Company and hereby agree that the Company without any payment to you shall in all cases be the sole owner of all intellectual and other proprietary rights therein without any restriction whatsoever.</div>
            <div>Your participation in the Services will expose you to extremely cold temperatures. I have read this Assumption of Risk, Waiver, and Release, fully understand its terms, and understand that I am giving up substantial rights, including my right to sue the Company under certain circumstances. I acknowledge that am signing this waiver freely and voluntarily. The term of this waiver is indefinite. I acknowledge that have been urged to avoid bringing valuables into and onto the Company's facilities and the Company shall not be liable for the loss of, theft of, or damage to my personal property. including items left in lockers, bathrooms, or anywhere else in the Company's facilities. I acknowledge that no portion of any fees paid by me is in consideration for the safeguarding of valuables.</div>
            <div>This consent authorization shall expire one year from date of service.</div>
            </div>
            <div className="consent4_date">
                <label for="date" className="consent4_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform4">
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

export default CryoskinCF;