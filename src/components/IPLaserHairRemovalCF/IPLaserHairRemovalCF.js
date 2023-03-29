import React from "react";
import './IPLaserHairRemovalCF.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import SignaturePad from 'react-signature-canvas';
// import Logo from  "../assets/logo.png";

function IPLaserHairRemovalCF() {

    const checkbox = ([])

    const [isCheckedYes1, setIsCheckedYes1] = useState(false);
    const [isCheckedNo1, setIsCheckedNo1] = useState(false);
    const [isCheckedYes2, setIsCheckedYes2] = useState(false);
    const [isCheckedNo2, setIsCheckedNo2] = useState(false);
    const [isCheckedYes3, setIsCheckedYes3] = useState(false);
    const [isCheckedNo3, setIsCheckedNo3] = useState(false);
    const [isCheckedYes4, setIsCheckedYes4] = useState(false);
    const [isCheckedNo4, setIsCheckedNo4] = useState(false);
    const [isCheckedYes5, setIsCheckedYes5] = useState(false);
    const [isCheckedNo5, setIsCheckedNo5] = useState(false);
    const [isCheckedYes6, setIsCheckedYes6] = useState(false);
    const [isCheckedNo6, setIsCheckedNo6] = useState(false);
    const [isCheckedYes7, setIsCheckedYes7] = useState(false);
    const [isCheckedNo7, setIsCheckedNo7] = useState(false);
    const [isCheckedYes8, setIsCheckedYes8] = useState(false);
    const [isCheckedNo8, setIsCheckedNo8] = useState(false);
    const [isCheckedYes9, setIsCheckedYes9] = useState(false);
    const [isCheckedNo9, setIsCheckedNo9] = useState(false);
    const [isCheckedYes10, setIsCheckedYes10] = useState(false);
    const [isCheckedNo10, setIsCheckedNo10] = useState(false);
    const [isCheckedYes11, setIsCheckedYes11] = useState(false);
    const [isCheckedNo11, setIsCheckedNo11] = useState(false);
    const [isCheckedYes12, setIsCheckedYes12] = useState(false);
    const [isCheckedNo12, setIsCheckedNo12] = useState(false);

    const handleYesChange1 = (event) => {
        setIsCheckedYes1(event.target.checked);
        setIsCheckedNo1(false);
      };
    
      const handleNoChange1 = (event) => {
        setIsCheckedNo1(event.target.checked);
        setIsCheckedYes1(false);
      };
    
      const handleYesChange2 = (event) => {
        setIsCheckedYes2(event.target.checked);
        setIsCheckedNo2(false);
      };
    
      const handleNoChange2 = (event) => {
        setIsCheckedNo2(event.target.checked);
        setIsCheckedYes2(false);
      };

      const handleYesChange3 = (event) => {
        setIsCheckedYes3(event.target.checked);
        setIsCheckedNo3(false);
      };
    
      const handleNoChange3 = (event) => {
        setIsCheckedNo3(event.target.checked);
        setIsCheckedYes3(false);
      };
    
      const handleYesChange4 = (event) => {
        setIsCheckedYes4(event.target.checked);
        setIsCheckedNo4(false);
      };
    
      const handleNoChange4 = (event) => {
        setIsCheckedNo4(event.target.checked);
        setIsCheckedYes4(false);
      };

      const handleYesChange5 = (event) => {
        setIsCheckedYes5(event.target.checked);
        setIsCheckedNo5(false);
      };
    
      const handleNoChange5 = (event) => {
        setIsCheckedNo5(event.target.checked);
        setIsCheckedYes5(false);
      };
    
      const handleYesChange6 = (event) => {
        setIsCheckedYes6(event.target.checked);
        setIsCheckedNo6(false);
      };
    
      const handleNoChange6 = (event) => {
        setIsCheckedNo6(event.target.checked);
        setIsCheckedYes6(false);
      };

      const handleYesChange7 = (event) => {
        setIsCheckedYes7(event.target.checked);
        setIsCheckedNo7(false);
      };
    
      const handleNoChange7 = (event) => {
        setIsCheckedNo7(event.target.checked);
        setIsCheckedYes7(false);
      };
    
      const handleYesChange8 = (event) => {
        setIsCheckedYes8(event.target.checked);
        setIsCheckedNo8(false);
      };
    
      const handleNoChange8 = (event) => {
        setIsCheckedNo8(event.target.checked);
        setIsCheckedYes8(false);
      };

      const handleYesChange9 = (event) => {
        setIsCheckedYes9(event.target.checked);
        setIsCheckedNo9(false);
      };
    
      const handleNoChange9 = (event) => {
        setIsCheckedNo9(event.target.checked);
        setIsCheckedYes9(false);
      };
    
      const handleYesChange10 = (event) => {
        setIsCheckedYes10(event.target.checked);
        setIsCheckedNo10(false);
      };
    
      const handleNoChange10 = (event) => {
        setIsCheckedNo10(event.target.checked);
        setIsCheckedYes10(false);
      };

      const handleYesChange11 = (event) => {
        setIsCheckedYes11(event.target.checked);
        setIsCheckedNo11(false);
      };
    
      const handleNoChange11 = (event) => {
        setIsCheckedNo11(event.target.checked);
        setIsCheckedYes11(false);
      };
    
      const handleYesChange12 = (event) => {
        setIsCheckedYes12(event.target.checked);
        setIsCheckedNo12(false);
      };
    
      const handleNoChange12 = (event) => {
        setIsCheckedNo12(event.target.checked);
        setIsCheckedYes12(false);
      };

    let sigPad = useRef({});
    let data = '';

    function clear() {
        sigPad.current.clear();
    }
    return (
        <div>
            <div >
               
                <div>
                    <img src={"../assets/logo.png"} className="Bitcare_image"/>
                </div>

                <div>
                    <h1 className="Laser_header">LASER HAIR REMOVAL</h1>
                </div>
                <div>
                    <h1 className="Laser_subheader">General Information</h1>
                </div>
                <form>
                    <div style={{marginRight: 50}}>
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <div style={{display: "flex", flexDirection: "row", width: "60%"}}>
                                <p className="FormName-header">Name</p>
                                <input type="text1" className="FormName_input" name="name" />
                            </div>
                            <div style={{display: "flex", flexDirection: "row", width: "50%"}}>
                                <p className="FormDate-header">Date of Birth</p>
                                <input type="text1" className="FormDate_input" name="DOB" />
                            </div>
                        </div>
                        
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <p className="FormName-header">Address</p>
                            <input type="text1"  className="FormAddress_input" name="Address" />
                        </div>
                        
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <div style={{display: "flex", flexDirection: "row", width: "50%"}}>
                                <p className="FormName-header">City</p>
                                <input type="text1" className="FormName_input" name="City" />
                            </div>
                            <div style={{display: "flex", flexDirection: "row", width: "50%"}}>
                                <p className="FormDate-header">State</p>
                                <input type="text1" className="FormDate_input" name="State" />
                            </div>
                            <div style={{display: "flex", flexDirection: "row", width: "40%"}}>
                                <p className="FormDate-header">Zipcode</p>
                                <input type="text1" className="FormDate_input" name="Zipcode" />
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <div style={{display: "flex", flexDirection: "row", width: "50%"}}>
                                <p className="FormPhone-header">Phone #</p>
                                <input type="text1" className="FormName_input" name="Phone" />
                            </div>
                            <div style={{display: "flex", flexDirection: "row", width: "50%"}}>
                                <p className="FormMail-header">Email</p>
                                <input type="text1" className="FormDate_input" name="Email" />
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <p className="FormName-header">Occupation</p>
                            <input type="text1"  className="FormAddress_input" name="Occupation" />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <div style={{display: "flex", flexDirection: "row", width: "60%"}}>
                                <p className="FormECN-header">Emergency Contact Name</p>
                                <input type="text1" className="FormName_input" name="Emergency Contact Name" />
                            </div>
                            <div style={{display: "flex", flexDirection: "row", width: "50%"}}>
                                <p className="FormEphone-header">Phone #</p>
                                <input type="text1" className="FormDate_input" name="Phone" />
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                                <p className="Form12-header">Would you like to be added to our email list for specials and discounts?</p>
                                <div class="facial212">
                                    <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes1} onChange={handleYesChange1} /> No  <input type="checkbox" checked={isCheckedNo1} onChange={handleNoChange1} /></label>
                                </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <p className="FormName-header">Occupation</p>
                            <input type="text1"  className="FormAddress_input" name="Occupation" />
                        </div>
                    </div>
                </form>

                

                <div style={{display: "flex", flexDirection: "row"}}>

                <div style={{width: "67%", marginLeft: 60}}>
                    <div>
                        <h1 className="Skin_header">SKIN CARE HISTORY</h1>
                    </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Have you had a Laser Hair Removal treatment before? </h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes2} onChange={handleYesChange2} /> No  <input type="checkbox" checked={isCheckedNo2} onChange={handleNoChange2} /></label>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Form0-header">If yes, when was the last treatment?</p>
                            <input type="text1" className="LaserSkin1_input" name="name" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>If yes, did you have any negative reaction? </h1>
                        </div>
                        <div class="facial21">
                        <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes3} onChange={handleYesChange3} /> No  <input type="checkbox" checked={isCheckedNo3} onChange={handleNoChange3} /></label>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Form-header">Details:</p>
                            <input type="text1" className="LaserSkin1_input" name="name" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Do you have a scar or tattoo on the area to be treated?  </h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes4} onChange={handleYesChange4} /> No  <input type="checkbox" checked={isCheckedNo4} onChange={handleNoChange4} /></label>                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Form-header">Details:</p>
                            <input type="text1" className="LaserSkin1_input" name="name" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Have you had Botox, Restylane, Juvederm or any Collagen
                            <br></br>injections within the last 6 months?  </h1>
                        </div>
                        <div class="facial22">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes5} onChange={handleYesChange5} /> No  <input type="checkbox" checked={isCheckedNo5} onChange={handleNoChange5} /></label>                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra12_content" style={{ paddingTop: "10px", marginRight: 100 }}>Have you used any Anticoagulants, Antibiotics, Accutane, Retina<br></br> or  Photo-Sensitizing  medication  within the last 3 months?</h1>
                        </div>
                        <div class="facial23">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes6} onChange={handleYesChange6} /> No  <input type="checkbox" checked={isCheckedNo6} onChange={handleNoChange6} /></label>                  
                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Are you currently sunburned on the areas you want treated?</h1>
                        </div>
                        <div class="facial24">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes7} onChange={handleYesChange7} /> No  <input type="checkbox" checked={isCheckedNo7} onChange={handleNoChange7} /></label>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Are you currently sunburned on the areas you want treated?</h1>
                        </div>
                        <div class="facial24">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes8} onChange={handleYesChange8} /> No  <input type="checkbox" checked={isCheckedNo8} onChange={handleNoChange8} /></label>                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Does your skin get easily irritated?</h1>
                        </div>
                        <div class="facial25">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes9} onChange={handleYesChange9} /> No  <input type="checkbox" checked={isCheckedNo9} onChange={handleNoChange9} /></label>                        </div>
                    </div>
                </div>

                <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Have you recently had any cosmetic procedures?<br></br> (eg Botox,Fillers, Peels etc) </h1>
                        </div>
                        <div class="facial26">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes10} onChange={handleYesChange10} /> No  <input type="checkbox" checked={isCheckedNo10} onChange={handleNoChange10} /></label>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Form-header">Details:</p>
                            <input type="text1" className="LaserSkin1_input" name="name" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="Hydra1_content">What are your current hair removal methods?</div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <label style={{marginLeft: 10, color: "#353535", fontSize: 14}}><input type="checkbox" /> Shaving</label>
                        <label style={{marginLeft: 50, color: "#353535", fontSize: 14}}><input type="checkbox" /> Waxing</label>
                        <label style={{marginLeft: 60, color: "#353535", fontSize: 14}}><input type="checkbox" /> Sugaring</label>
                        <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Creams</label>
                    </div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <label style={{marginLeft: 10, color: "#353535", fontSize: 14}}><input type="checkbox" /> Tweezing</label>
                        <label style={{marginLeft: 42, color: "#353535", fontSize: 14}}><input type="checkbox" /> Electrolysis</label>
                        <label style={{marginLeft: 35, color: "#353535", fontSize: 14}}><input type="checkbox" /> Other <input className="other_input" /></label>
                        
                    </div>
                </div>

                <div>
                    <div className="Hydra1_content">What are your current Tanning methods?</div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <label style={{marginLeft: 10, color: "#353535", fontSize: 14}}><input type="checkbox" /> Sun Exposure</label>
                        <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Self Tanners</label>
                        <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Spray Tan</label>
                        <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Sunbed</label>
                    </div>
                </div>


                </div>

                <div style={{width: "20%", marginRight: 20}}>
                    <div>
                        <h1 className="Skin_header">WHICH AREAS WOULD YOU LIKE TREATED?</h1>
                        <div className="Hydra2_content">Please check all that apply:</div>
                    </div>

                    <div style={{marginLeft: 0, backgroundColor: "#1f403d", alignItems: "center"}}>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Upper Lip</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" />Chin</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Brows</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Underarms</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Chest</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Back</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Upper Legs</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Lower Legs</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Bikini Area</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Brazilian</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Upper Arms</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Lower Arms</label>
                        </div>
                        <div>
                            <label style={{color: "#fff"}}><input type="checkbox" /> Other <input type="text" className="other_input"/> </label>
                        </div>
                    </div>

                    <div style={{marginTop: 40, backgroundColor: "#efe2ea", alignItems: "center"}}>
                        <div>
                            <div className="Skin_header1">FOR FEMALE CLIENTS</div>
                            <div className="Hydra2_content">Are you currently</div>
                        </div>
                        <div>
                            <label style={{color: "#353535"}}><input type="checkbox" /> Pregnant</label>
                        </div>
                        <div>
                            <label style={{color: "#353535"}}><input type="checkbox" />  Breast Feeding</label>
                        </div>
                        <div>
                            <label style={{color: "#353535"}}><input type="checkbox" /> Menstruating</label>
                        </div>
                    </div>
                </div>

                </div>



                <div>
                    <h1 className="Medical_header">Medical History</h1>
                    <div className="Medical_content">Please check all that apply:</div>
                </div>

                <div className="facial">
                    <div className="space">
                        <div className="medicalcheckbox">
                            <label className="fonts"><input type="checkbox" /> ALS (AmyotropicLateral Sclerosis)</label> <br></br>
                        
                            <label className="fonts"><input type="checkbox" />Anticoagulants</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Arthritis</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Autoimmune Disease</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Birth Control Pill</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Bleeding Disorder</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Cancer</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Cardiac/Vascular Issues</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Cardiopathy</label> <br></br> 

                            <label className="fonts"><input type="checkbox" />Celiac</label> <br></br> 

                            <label className="fonts"><input type="checkbox" />Dermatitis</label><br></br>

                            <label className="fonts"><input type="checkbox" />Diabetes</label><br></br>

                            <label className="fonts"><input type="checkbox" />Digestive Issues</label>
                        </div>

                        <div className="medicalcheckbox">
                            <label className="fonts"><input type="checkbox" />Dislocations</label> <br></br>
                        
                            <label className="fonts"><input type="checkbox" />Easy Bruising</label>  <br></br>

                            <label className="fonts"><input type="checkbox" />Epilepsy</label><br></br>

                            <label className="fonts"><input type="checkbox" />Fever</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Fungal Condition</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Headaches/Migraines</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Heart/Liver/Kidney Disease</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Hemophilliac</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Hepatitis</label> <br></br>

                            <label className="fonts"><input type="checkbox" />High Blood Pressure</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Hirsutism</label> <br></br>

                            <label className="fonts"><input type="checkbox" />HIV</label> <br></br>

                            <label className="fonts"><input type="checkbox"/>Hives/Herpes/Shingles</label>
                        </div>

                        <div className="medicalcheckbox">
                            <label className="fonts"><input type="checkbox" />Hormone Therapy</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Hyper pigmentation</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Hypertension</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Hypopigmentation</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Hysterectomy</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Infection</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Inflammation</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Insulin Monitor</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Joint/Muscle Pain</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Keloid Scarring</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Loss of Sensation</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Low Blood Pressure</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Lupus</label>

                        </div>

                        <div className="medicalcheckbox">

                            <label className="fonts"><input type="checkbox" />Menopause</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Multiple Sclerosis</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Muscle Cramps</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Organ Failure</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Pacemaker</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Phlebitis</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Plastic/Bone/ Cement/Implants</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Polycystic Ovaries</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Pre-Cancerous Lesions</label><br></br>

                            <label className="fonts"><input type="checkbox" />Psoriasis</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Rashes</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Recent Surgical Incision</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Rheumatoid Arthritis</label>
                        </div>

                        <div className="medicalcheckbox">
                            <label className="fonts"><input type="checkbox" />Seborrhea</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Skin Cancer</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Skin Conditions/Disorders</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Skin Pigmentation</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Stress</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Thyroid Disease</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Transdermal Drug Delivery System</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Tranplant</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Unhealed Wounds</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Varicose Veins</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Warts</label> <br></br>

                            <label className="fonts"><input type="checkbox" />Other</label>

                            
                        </div>
                        
                    
                    </div>
                </div>

                <div style={{width: "90%", marginLeft: 50, marginTop: 15}}>
                    <div>
                        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
                            <p className="Form-header">Details for any of the above</p>
                            <input type="text1"  className="FormAddress_input" name="Address" />
                        </div>
                    </div>
                    <div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Are you currently taking any medications, including oral, topical or transdermal? </h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes11} onChange={handleYesChange11} /> No  <input type="checkbox" checked={isCheckedNo11} onChange={handleNoChange11} /></label>
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Form-header">Details</p>
                            <input type="text1" className="FormAddress_input" name="name" />
                        </div>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <p className="LaserSkin-header">Are you allergic to any of the following?</p>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Lidocaine</label>
                            <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Latex</label>  
                            <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Foods</label>
                            <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Lotions</label>
                            <label style={{marginLeft: 40, color: "#353535", fontSize: 14}}><input type="checkbox" /> Other <input className="other_input" /></label>    
                        </div>
                    </div>
                    <div className="facial-container">
                        <div class="facial1">
                            <h1 className="Hydra1_content" style={{ paddingTop: "10px" }}>Would you like to be added to our email list for future specials and discounts? </h1>
                        </div>
                        <div class="facial2">
                            <label className="label_facial">Yes <input type="checkbox" checked={isCheckedYes12} onChange={handleYesChange12} /> No  <input type="checkbox" checked={isCheckedNo12} onChange={handleNoChange12} /></label>                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Form1-header">How did you hear about "BUSINESS NAME"?</p>
                            <input type="text1" className="FormAddress_input" name="name" />
                        </div>
                    </div>
                </div>
                </div>

                
                <div className="Laser_subheader1">
                    <h2 className="subheader3">This form is completely confidential. By signing below, I agree to the following:<br></br>
                        The information I have provided regarding my Medical History is accurate to the best of my knowledge.<br></br>
                        I understand the information given pertaining to the requested treatment/s and confirm that I do not have any
                        condition/s that would make the treatment/s unsuitable.<br></br>
                        I agree to inform my Technician if I experience any discomfort during the procedure, so they may adjust accordingly.<br></br>
                        I agree to waive all liability towards my Technician and "BUSINESS NAME" for any injury or damages incurred due to my
                        failure to disclose any existing or past health conditions.
                    </h2>
                </div>

                <div style={{width: "90%", marginLeft: 50, marginTop: 15}}>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Date-header">Date:</p>
                            <input type="text1" className="FormDate1_input" name="name" />
                        </div>
                    </div>
                    <div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Sign-header">Client Signature:</p>
                            <div className="Sign">
                                <div className="bg_hydrafacial">
                                    <SignaturePad
                                        ref={sigPad}
                                        penColor="black"
                                    />
                                    <div className="btns">
                                        <button type="button" id="clear_btn" onClick={clear}> Clear</button>
                                        <button type="submit" id="save_btn"> Save & Continue</button>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p className="Sign1-header">Technical Signature:</p>
                            <div className="Sign">
                                <div className="bg_hydrafacial1">
                                    <SignaturePad
                                        ref={sigPad}
                                        penColor="black"
                                    />
                                    <div className="btns">
                                        <button type="button" id="clear_btn" onClick={clear}> Clear</button>
                                        <button type="submit" id="save_btn"> Save & Continue</button>
                                </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default IPLaserHairRemovalCF;