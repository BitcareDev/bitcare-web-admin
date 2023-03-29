import React, { useRef, useState } from "react";
import './AspenLaserCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDotFilled } from 'react-icons/rx';

function AspenLaserCF() {

    const [qtn, setQtn] = useState("");
    const [qtn1, setQtn1] = useState("");
    const [qtn2, setQtn2] = useState("");
    const [qtn3, setQtn3] = useState("");
    const [qtn4, setQtn4] = useState("");
    const [qtn5, setQtn5] = useState("");
    const [qtn6, setQtn6] = useState("");
    const [qtn7, setQtn7] = useState("");
    const [qtn8, setQtn8] = useState("");
    const [qtn9, setQtn9] = useState("");
    var [date, setDate] = useState(new Date());
    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }
    return (
        <div class="container-fluid mt-3">
            <div className="Bitcare_img2">
                {/* <img src="../../../assets/Bitcare2.png" alt="main" className="image_info2" /> */}
            </div>
            <div className="Aspenlaser-header">
                <h1 class="Aspen_header">LASER THERAPY CONSENT & CONTRAINDICATION FORM</h1>
                <h1 class="Aspen_header">Aspen Class IV Laser Therapy Treatment</h1>
            </div>
            <div className="Aspen_container">
                <div class="Aspen-content mb-4"><b>I here by authorize and provide permission to perform an Aspen Class IV Laser Therapy treatment.</b></div>

                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 mb-4">
                    <div class="col mt-2">
                        <div className="Aspen-content1">I understand that the Aspen Class IV Laser Therapy is a safe and non-invasive treatment and has been cleared by the FDA to emit photon energy for the relief of minor muscle and joint pain, muscle spasm, pain and stiffness associated with minor arthritis, promoting relaxation of muscle tissue, and increase local blood circulation.</div>
                        <div className="Aspen-content1">I understand that every individual responds uniquely to laser therapy treatments. Some patients may see immediate results after the first treatment or depending on the severity of their condition, may require several treatments before they begin to feel results. Most patients experience a decrease in pain and an increase in range of motion within the first few hours (and up to 36 hours) from the first treatment.</div>
                        <div className="Aspen-content1">Note: Increased soreness may occur after your first laser therapy treatment session. This is a normal healing phenomenon known as retracing. If soreness occurs following your treatment, use ice for 5 minutes every 30 minutes, and no more than 5 minutes every 30 minutes. Repeat the icing as necessary If soreness persists after icing, please contact this office</div>
                    </div>
                    <div class="col">
                        <div className="Aspen_subheader">CONTRAINDICATIONS:</div>
                        <div className="Aspen-content">To the best of my knowledge, I may have, or am, one or more of the following:</div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Are you pregnant?</div>
                            </div>
                            <div class="col C1">
                                <div><div for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn5 === "Yes5"} onChange={() => setQtn5("Yes5")} /> </div>  <div for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn5 === "No5"} onChange={() => setQtn5("No5")} /></div></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Do you have cancer?</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn6 === "Yes6"} onChange={() => setQtn6("Yes6")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn6 === "No6"} onChange={() => setQtn6("No6")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Have you had cancer within the past 12 months?</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn7 === "Yes7"} onChange={() => setQtn7("Yes7")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn7 === "No7"} onChange={() => setQtn7("No7")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Are you currently taking photosensitizing medications?</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn8 === "Yes8"} onChange={() => setQtn8("Yes8")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn8 === "No8"} onChange={() => setQtn8("No8")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> If yes, can you be in the sun for 10 min. without having itchiness, redness, blotchiness or pigmentation issues?</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn9 === "Yes9"} onChange={() => setQtn9("Yes9")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn9 === "No9"} onChange={() => setQtn9("No9")} /></label></div>
                            </div>
                        </div>

                        <div class="Aspen_subheader mt-3">PRECAUTIONS:</div>
                        <div>To the best of my knowledge, I may have one or more of the following:</div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Do you have a pacemaker or other implanted medical devie (morphine pump, neurostimulator, etc)?</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn1 === "Yes1"} onChange={() => setQtn1("Yes1")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn1 === "No1"} onChange={() => setQtn1("No1")} /></label></div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-12">
                                <div class="input-group mt-2">
                                    <span class="input-group-text Aspen-header1">If yes, where is it located?</span>
                                    <input type="text1" class="form-control Aspen_input" name="name" />
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Have you had steroid injection(s) within the past 7 days?</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn2 === "Yes2"} onChange={() => setQtn2("Yes2")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn2 === "No2"} onChange={() => setQtn2("No2")} /></label></div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="input-group mt-2">
                                <span class="input-group-text Aspen-header1">If yes, where?</span>
                                <input type="text1" class="form-control Aspen_input" name="name" />
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Is your pain directly over an epiphyseal plate (growth plate) in children under 15 years of age.</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn3 === "Yes3"} onChange={() => setQtn3("Yes3")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn3 === "No3"} onChange={() => setQtn3("No3")} /></label></div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 mt-2">
                            <div class="col">
                                <div className="Aspen-content"><RxDotFilled /> Is your pain over the Ovaries, Thyroid Gland or Testes?</div>
                            </div>
                            <div class="col C1">
                                <div><label for="chkPassport" className="Check_box">Yes <input type="checkbox" id="chkPassport1" checked={qtn4 === "Yes4"} onChange={() => setQtn4("Yes4")} /> </label>  <label for="chkPassport" className="Check_box"> No <input type="checkbox" id="chkPassport" checked={qtn4 === "No4"} onChange={() => setQtn4("No4")} /></label></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Aspen_subheader mt-4">EYE SAFETY</div>
                <div class="Aspen-content mt-2 mb-2">I understand that Class IV Therapy Lasers emit both visible and invisible light. Protective eyewear is necessary at all times during the treatment. I will not remove the Safety Goggles until the administrator of the laser has turned off the laser treatment and provided notification that it is safe to remove them. You may be asked to remove reflective objects, such as rings, metal watchbands, and jewelry prior to treatment with the laser.</div>
                <div class="Aspen_subheader mt-4">ACKNOWLEDGEMENT</div>
                <div class="Aspen-content mt-2 mb-2">I have read and understand the foregoing. This Laser Therapy Consent Form applies to subsequent visits and treatments. I understand that there is no promise or guarantee regarding the results of the treatment, and that to achieve maximum clinical results, I may need multiple treatments.</div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Patient Name:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Patient Signature:</label>
                </div>
                <div class="col-sm-8">
                    <div className="bg_Aspen">
                        <SignaturePad
                            ref={sigPad}
                            penColor="black"
                        />
                    </div>
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                        <div class="col">
                            <button type="button" id="clear_bttn" onClick={clear}><span class="glyphicon glyphicon-remove" ></span> Clear</button>
                        </div>
                        <div class="col">
                            <button type="submit" id="save_bttn"><span class="glyphicon glyphicon-ok"></span> Save & Continue</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Guardian Name:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Guardian Signature:</label>
                </div>
                <div class="col-sm-8">
                    <div className="bg_Aspen">
                        <SignaturePad
                            ref={sigPad}
                            penColor="black"
                        />
                    </div>
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                        <div class="col">
                            <button type="button" id="clear_bttn" onClick={clear}><span class="glyphicon glyphicon-remove" ></span> Clear</button>
                        </div>
                        <div class="col">
                            <button type="submit" id="save_bttn"><span class="glyphicon glyphicon-ok"></span> Save & Continue</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Health Care Professional:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" placeholder="Name" class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Date:</label>
                </div>
                <div class="col-sm-8">
                    <input type="text1" style={{ fontWeight: 'bold' }} value={date.toLocaleDateString()} class="form-control Aspen_input" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-3">
                    <label className="Aspen_content2">Health Care Professional Signature:</label>
                </div>
                <div class="col-sm-8">
                    <div className="bg_Aspen">
                        <SignaturePad
                            ref={sigPad}
                            penColor="black"
                        />
                    </div>
                    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
                        <div class="col">
                            <button type="button" id="clear_bttn" onClick={clear}><span class="glyphicon glyphicon-remove" ></span> Clear</button>
                        </div>
                        <div class="col">
                            <button type="submit" id="save_bttn"><span class="glyphicon glyphicon-ok"></span> Save & Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AspenLaserCF;