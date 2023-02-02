import React, { useRef, useState } from "react";
import './AspenLaserCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDotFilled } from 'react-icons/rx';
import { C6data, C7data } from "../../data/Cdata";

function AspenLaserCF() {
    const [qtn, setQtn] = useState("");
    const [qtn1, setQtn1] = useState("");
    var [date, setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }
    return (
        <div class="text_ft">
            <div className="bg_consent9">
                <div className="header9">
                    <h1 className="consent9_header9">ASPEN LASER</h1>
                    <h1 className="consent9_header">LASER THERAPY CONSENT & CONTRAINDICATION FORM</h1>
                    <h1 className="consent91_header">Aspen Class IV Laser Therapy Treatment</h1>
                </div>
                <div className="consent9_container">
                    <div><b>I here by authorize and provide permission to perform an Aspen Class IV Laser Therapy treatment.</b></div>
                    <div>I understand that the Aspen Class IV Laser Therapy is a safe and non-invasive treatment and has been cleared by the FDA to emit photon energy for the relief of minor muscle and joint pain, muscle spasm, pain and stiffness associated with minor arthritis, promoting relaxation of muscle tissue, and increase local blood circulation.</div>
                    <div>I understand that every individual responds uniquely to laser therapy treatments. Some patients may see immediate results after the first treatment or depending on the severity of their condition, may require several treatments before they begin to feel results. Most patients experience a decrease in pain and an increase in range of motion within the first few hours (and up to 36 hours) from the first treatment.</div>
                    <div>Note: Increased soreness may occur after your first laser therapy treatment session. This is a normal healing phenomenon known as retracing. If soreness occurs following your treatment, use ice for 5 minutes every 30 minutes, and no more than 5 minutes every 30 minutes. Repeat the icing as necessary If soreness persists after icing, please contact this office</div>
                    <div className="consent9_text">CONTRAINDICATIONS:</div>
                    <div>To the best of my knowledge, I may have, or am, one or more of the following:</div>
                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    {C6data.map(function (doc, idx) {
                                return (
                                    <>
                        <div class="col">
                        {doc.sideText1 ? <div><RxDotFilled/> {doc.sideText1}</div> : ""}
                        </div>
                        <div class="col C1">
                            <div><label for="chkPassport"><input type="checkbox" id="chkPassport" checked={qtn === "Yes"} onChange={() => setQtn("Yes")}/> Yes</label>  <label for="chkPassport" className="No"><input type="checkbox" id="chkPassport" checked={qtn === "No"} onChange={() => setQtn("No")}/> No</label></div>
                        </div>
                        </>
                                )
                            })}
                    </div>

                    <div className="consent9_text">PRECAUTIONS:</div>
                    <div>To the best of my knowledge, I may have one or more of the following:</div>
                    <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    {C7data.map(function (doc, idx) {
                                return (
                                    <>
                        <div class="col">
                        {doc.sideText2 ? <div><RxDotFilled/> {doc.sideText2}</div> : ""}
                        </div>
                        <div class="col C1">
                            <div><label for="chkPassport"><input type="checkbox" id="chkPassport" checked={qtn1 === "Y"} onChange={() => setQtn1("Y")}/> Yes</label>  <label for="chkPassport" className="No"><input type="checkbox" id="chkPassport" checked={qtn1 === "N"} onChange={() => setQtn1("N")}/> No</label></div>
                        </div>
                        </>
                                )
                            })}
                    </div>
                    <div className="consent9_text">EYE SAFETY</div>
                    <div>I understand that Class IV Therapy Lasers emit both visible and invisible light. Protective eyewear is necessary at- all times during the treatment. I will not remove the Safety Goggles until the administrator of the laser has turned off the laser treatment and provided notification that it is safe to remove them. You may be asked to remove reflective objects, such as rings, metal watchbands, and jewelry prior to treatment with the laser.</div>
                    <div className="consent9_text">ACKNOWLEDGEMENT</div>
                    <div>I have read and understand the foregoing. This Laser Therapy Consent Form applies to subsequent visits and treatments. I understand that there is no promise or guarantee regarding the results of the treatment, and that to achieve maximum clinical results, I may need multiple treatments.</div>
                </div>
                <div className="consent9_date">
                    <label for="date" className="consent9_text">Date: </label>
                    <input id="target" value={date.toLocaleDateString()} />
                </div>
                <div className="bg_consentform9">
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

export default AspenLaserCF;