import React, { useRef, useState, useEffect } from "react";
import './EmsculptNeoCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { C3data, C4data } from "../../data/Cdata";
import { RxDotFilled } from 'react-icons/rx';
import { RxDot } from 'react-icons/rx';

function EmsculptNeoCF() {
    const [qtn, setQtn] = useState("");
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
    });
    const [show, setShow] = useState(false)
    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }
    return (
        <div class="text_ft">
            <div className="bg_consent3">
            <h1 className="consent3_header">EMSCULPT NEO</h1>
                <h1 className="consent3_header">Patient Treatment Record</h1>
                <div className="consent3_container">
                    <div>You are scheduled for a series of non-invasive treatments with the Emsculpt Nec®<br />EMSCULPT NEO® is indicated for non-invasive lipolysis (breakdown of fat) of the abdomen and thighs and reduction in circumference of the abdomen and thighs with Skin Type I to Skin Type VI, and for non-invasive lipolysis (breakdown of fat) of the upper arms limited to skin types II and III and BMI 30 or under. EMSCULPT NEO® also indicated for improvement of abdominal tone, strengthening of the abdominal muscles, development of firmer abdomen; strengthening, toning, and firming of buttocks, thighs, and calves; and improvement of muscle tone and firmness, for strengthening muscles in arms. <b>Initials:</b></div>
                    <div>Your treatment provider will discuss your specific treatment needs. The recommended number of treatments is 4. The treatment is typically about 20-30 minutes per session, with sessions separated by 5 to 10 days for HIFEM+RF Advance/Gentle protocol or 2-3 days for HIFEM Classic protocol. Completing a full treatmint series is necessary to maximize treatment efficacy. You may need additional treatments, depending on your goals. <b>Initials:</b></div>
                    <div>Before the treatment, no unusual preparations are required; however, keeping your body well hydrated is strongly recommended. On the day of the treatment, you are advised to wear comfortable clothing that allows flexibility for correct positioning during the treatment. To avoid excessive sweating, the treated area should be shaved, or hairs in the treatment area should be trimmed before the treatment. Also, the treated area will be wiped with alcohol wipes before treatment to remove any moisture, perfume, moisturizers, or oils. You will be asked to remove all metallic accessories and electronic devices. <b>Initials:</b></div>
                    <div>I acknowledge that a successful treatment outcome can be affected by smoking, excessive alcohol consumption, eating disorders, or ongoing medication. While no special diet is required, you are encouraged to eat healthy to help promote and maintain results. Initials:</div>
                    <div>The treatment does not require anesthesia. During the application, you will feel intense muscle contractions and a heating sensation in the treated area. It is important to note that during the treatment the heating sensation may be intense, but it should never be painful. Please ask your provider to re-adjust the intensity should you feel any pain or discomfort. The procedure doesn't require any recovery time. Typically, you can get back to your daily routine right after the treatment. <b>Initials:</b></div>
                    <div>I am aware that I MUST NOT wear any metallic accessories (such as jewelry, watch or clothes containing metallic threads or metallic accessories) during the treatment. I also acknowledge that I do not have any metallic or electronic implants (such as pacemakers, defibrillators, metallic IUDs, etc.). <b>Initials:</b></div>
                    <div className="consent3_text">Please answer whether you currently have or had any of the following in the past*:</div>
                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    {C3data.map(function (doc, idx) {
                                return (
                                    <>
                        <div class="col">
                        {doc.sideHeading ? <div><RxDotFilled/> {doc.sideHeading}</div> : ""}
                        </div>
                        <div class="col C1">
                            <div><label for="chkPassport"><input type="checkbox" id="chkPassport" checked={qtn === "Yes"} onChange={() => setQtn("Yes")}/> Yes</label>  <label for="chkPassport" className="No"><input type="checkbox" id="chkPassport" checked={qtn === "No"} onChange={() => setQtn("No")}/> No</label></div>
                        </div>
                        </>
                                )
                            })}
                    </div>
                    <div className="consent3_text"><RxDotFilled/> If you answer YES to any of these questions, please specify:</div>
                    <div>
                    <textarea class="form-control" name="subject"></textarea>
                    </div>
                    <div className="consent3_text">Please answer the following:</div>
                    <div><RxDotFilled/> Have you been pregnant</div>
                    <div className="qn">
                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                        <div class="col">
                        <div><RxDot/> C-section</div>
                        <div><RxDot/> Vaginal birth</div>
                        </div>
                        <div class="col">
                        <input type="checkbox" id="chkPassport" class="check"/><br/>
                        <input type="checkbox" id="chkPassport" class="check"/>
                        </div>
                    </div>
                    </div>

                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    {C4data.map(function (doc, idx) {
                                return (
                                    <>
                        <div class="col">
                        {doc.qn ? <div><RxDotFilled/> {doc.qn}</div> : ""}
                        </div>
                        <div class="col C1">
                            <div><label for="chkPassport"><input type="checkbox" id="chkPassport"/> Yes</label>  <label for="chkPassport" className="No"><input type="checkbox" id="chkPassport"/> No</label></div>
                        </div>
                        </>
                                )
                            })}
                    </div>
                    <div className="qn-text">*For the full range of contraindications, warnings, and cautions, consult your treatment provider.</div>
                    <div className="consent3_text">Treatment considerations</div>
                    <div><RxDotFilled/> I am aware that the treatment cannot be applied over the head, neck, spinal cord, heart or testes. <b>Initials:</b></div>
                    <div><RxDotFilled/> I am aware that the treatment cannot be applied over swollen or neoplastic tissues, space occupying lesions, or skin eruptions. <b>Initials:</b></div>
                    <div><RxDotFilled/> I am aware that pregnancy is contraindicated, and pregnant women cannot undergo the treatment. <b>Initials:</b></div>
                    <div><RxDotFilled/> I am aware that as is the case with every heat-based therapy, in rare cases, burns can occur. <b>Initials:</b></div>
                    <div><RxDotFilled/> I am aware that the applicators should always be in direct contact with the skin. <b>I am aware that treatment should not be applied over clothing or scar tissue. Initials:</b></div>
                    <div><RxDotFilled/> I understand that there are certain side effects associated with EMSCULPT NEO treatments. The side effects may include, but are not limited to muscular pain, intramuscular fat decrease, temporary muscle spasm, temporary joint or tendon pain, local erythema or skin redness, increased menstrual flow in female patients and panniculitis. <b>Initials:</b></div>
                    <div><RxDotFilled/> I understand that the treatment over injured or otherwise impaired muscles is contraindicated <b>Initials:</b></div>
                    <div><RxDotFilled/> I understand that the treatment may involve risks of complications or injury from both known and unknown causes, and freely assume these risks. <b>Initials:</b></div>
                    <div><RxDotFilled/> I agree to before and after treatment photographs, measurements and weighing, as this will help for medical evaluation of the results of the treatment. Information will be acquired for medical records or marketing purposes. <b>Initials:</b></div>
                    <div><RxDotFilled/> I understand the results may vary from person to person and that an exact result cannot be predicted. Completing a full treatment series is necessary to maximize treatment efficacy. It is very unlikely, but it is possible that you will not feel any recognizable result after the procedure. I acknowledge the results may not meet my expectations. <b>Initials:</b></div>
                    <div><RxDotFilled/> I certify that I have read this entire document and that I agree with all provisions. I certify that I have had the opportunity to ask questions and these questions have been answered in full to my satisfaction. I fully understand the treatment conditions, the procedure, and possible side effects. <b>Initials:</b></div>
                    <div><RxDotFilled/> I have read the above information, and I request and give my consent to be treated with the EMSCULPT NEO by the physician(s) in this practice and his/her designated staff. <b>Initials:</b></div>
                    <div>My signature below indicates that the above information is accurate and current.</div>
                    <div>*For the full range of possible adverse effects and expected device-releated treatment sequelae, consult your treatment provider.</div>
                </div>
                <div className="consent3_date">
                    <label for="date" className="consent3_text">Date: </label>
                    <input id="target" value={date.toLocaleDateString()} />
                </div>
                <div className="bg_consentform3">
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

export default EmsculptNeoCF;