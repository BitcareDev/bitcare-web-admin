import React, {useRef, useState, useEffect} from "react";
import './IVII_CF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignaturePad from 'react-signature-canvas';
import { RxDotFilled } from 'react-icons/rx';

function IntramuscularVitaminInjectionsInformedCF(){
    const [qtn, setQtn] = useState("");
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
            <div className="bg_consent5">
            <h1 className="consent5_header">Intramuscular Vitamin Injections Informed Consent</h1>
            <div className="consent5_container">
                <div>Vitamins are vital for our body's optimal function, general well-being, and vitality. Vitamin injections can supply the much-needed nutrients your body needs to maintain and enhance normal bodily functions.</div>
                <div>Vitamin injections are better absorbed by the body since they go directly into the blood stream. Alternatives to these injections are oral vitamins, liquid drinks, topical creams and mouth sprays.</div>
                <div>I consent to get the following intramuscular vitamin injection (select all that apply):</div>
                <div className="check_box">
            <label for="chkPassport"><input type="checkbox" id="chkPassport" name="remember"/> Lipo-B</label>
            </div>
            <div className="check_box">
            <label for="chkPassport"><input type="checkbox" id="chkPassport" name="remember"/> Myers cocktail</label>
            </div>
            <div className="check_box">
            <label for="chkPassport"><input type="checkbox" id="chkPassport" name="remember"/> Glutathione</label>
            </div>
            <div className="check_box">
            <label for="chkPassport"><input type="checkbox" id="chkPassport" name="remember"/> Cyanocobalamin (B12)</label>
            </div>
            <label>Do you have allergic reactions to SULFA <input type="checkbox" id="chkPassport" class="input_name" checked={qtn === "Yes"} onChange={() => setQtn("Yes")}/>Yes <input type="checkbox" id="chkPassport" checked={qtn === "No"} onChange={() => setQtn("No")}/>No</label>
            <div>*Patients with allergic reactions to SULFA are not recommended to have an intramuscular vitamin injection that consists of methionine in Lipo-B.</div>
            <div>Vitamin injection common side effects include but are not limited to:</div>
            <div><RxDotFilled/> Feeling of pain and a warm sensation at the site of injection</div>
            <div><RxDotFilled/> Redness or swelling at injection site</div>
            <div>If any of these side effects become severe or bothersome, I will contact my primary care physician.</div>
            <div>I understand that although rare Vitamin injections can result in serious side effects including allergic reaction to any of the ingredients found in the injection. I will communicate with my health care provider If I have any known allergic reactions to foods, dyes, preservatives or any other substances before I consent to injection.</div>
            <div>I experience any of the following signs of allergic reaction, I should immediately seek medical attention from my primary care physician or nearest emergency room. Signs of allergic reaction include, but are ot limited to:</div>
            <div><RxDotFilled/> Itching of skin, hives, rashes, wheezing, difficulty breathing, and swelling of the mouth or throat.</div>
            <div>By signing below, I acknowledge that I have read the foregoing informed consent and agree to the treatment with its associated risks. I hereby release the medical providers and the facility from liability associated with this procedure.</div>
            <div>This consent authorization shall expire one year from date of service.</div>
            </div>
            <div className="consent5_date">
                <label for="date" className="consent5_text">Date: </label>
                <input id="target" value={date.toLocaleDateString()}/>
            </div>
            <div className="bg_consentform5">
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

export default IntramuscularVitaminInjectionsInformedCF;