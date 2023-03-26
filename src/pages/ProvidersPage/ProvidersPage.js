import "./ProvidersPage.css";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";
import Toggle from 'react-toggle'
import "react-toggle/style.css" ;

export default function ProvidersPage(props) {
  const {search,setActive,setFilter,filter}=props;
  const isWorking=props.active;
  const clinic_location=props.location;
  console.log("Search: ",search)
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [isNew, setIsNew] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [offDays, setOffDays] = useState([
    {
      day: "Sun",
      off: false,
    },
    {
      day: "Mon",
      off: false,
    },
    {
      day: "Tue",
      off: false,
    },
    {
      day: "Wed",
      off: false,
    },
    {
      day: "Thu",
      off: false,
    },
    {
      day: "Fri",
      off: false,
    },
    {
      day: "Sat",
      off: false,
    },
  ]);
  const [provider, setProvider] = useState(null);
  const [services, setServices] = useState([]);
  // const [field, state, { setValue, setTouched }] = useField('services');
  const [selectedOption, setSelectedOption] = useState(null);
  const [showLabel, setShowLabel] = useState([]);
  const {
    name,
    email,
    password,
    phone,
    location,
    address,
    inTime,
    outTime,
    specialist,
    onDays,
    active,
    image
  } = provider ? provider : props;
  const selectedServices = provider ? provider.services : props;
  const selectedOffDays = provider ? provider.offDays : props;
  useEffect(() => {
    setProviders([]);
    setShowLabel([]);
    const fetchProviders = async () => {
      await getDocs(collection(db, "Providers")).then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          data.id = element.id;
          // console.log("data: ", element.id);
          if (data.active===isWorking) {
            setProviders((arr) => [...arr, data]);
            setShowLabel((val) => [...val, false]);
          }
        });
      });
    };
    fetchProviders();
    const fetchServices = async () => {
      await getDocs(collection(db, "ClinicServices")).then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          // console.log("data: ", data.name);
          setServices((arr) => [
            ...arr,
            {
              label: data.name,
              value: data.name,
            },
          ]);
        });
      });
    };
    fetchServices();
    return function reset() {
      setProviders([]);
      setServices([]);
    };
  }, [isWorking]);

  useEffect(()=>{
    setFilteredProviders([]);
    console.log('location in provider: ',clinic_location);
    console.log('providers: ',providers);
    if(search==='' && clinic_location==='All')
    setFilteredProviders(providers);
    else {
      providers.forEach((item)=>{
        if(clinic_location!=='All' && item.location.toLocaleLowerCase()===clinic_location.toLocaleLowerCase()){
          if(search!==''){
            if(item.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.specialist.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.phone.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            )
            setFilteredProviders(arr=>[...arr,item]);
          }
          else
          setFilteredProviders(arr=>[...arr,item]);
        }
        else if(search!=='' && (
          item.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.specialist.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            item.phone.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ))
        setFilteredProviders(arr=>[...arr,item]);
      })
    }
    console.log("Filtered providers: ",filteredProviders)
  },[search,clinic_location,providers,active])

  const handleShowLabel = (index) => {
    const labels = showLabel.map((label, idx) => {
      if (idx === index) return !label;
      return false;
    });
    setShowLabel(labels);
  };

  const handleCheckbox = (index) => {
    const days = offDays.map((day, idx) => {
      if (idx === index) day.off = !day.off;
      return day;
    });
    setOffDays(days);
  };

  const removeProvider = async (item) => {
    item.active = false;
    await setDoc(doc(db, "Providers", item.id), item);
    setShowLabel([]);
    setProviders([]);
    await getDocs(collection(db, "Providers")).then((querySnapshot) => {
      querySnapshot.forEach((element) => {
        var data = element.data();
        data.id = element.id;
        if (data.active) {
          setProviders((arr) => [...arr, data]);
          setShowLabel((val) => [...val, false]);
        }
      });
    });
  };
  // console.log("Provider: ",provider);

  // const handleEdit=(item)=>{
  //   {
  //     setProvider(item);

  // }

  useEffect(() => {
    console.log("Provider: ", provider);
    console.log("isedit: ", isEdit);
    console.log("Name: ", services);
    if (provider) {
      setIsEdit(true);
      setIsNew(true);
      if (selectedServices) {
        var unSelectServices = services.filter(
          (n) => !selectedServices?.includes(n)
        );
        setServices(unSelectServices);
        console.log("SErvices: ", services);
      }
      if (selectedOffDays) {
        var unSelectOffdays = offDays.map((item) => {
          if (selectedOffDays?.includes(item.day)) item.off = true;
          return item;
        });
        setOffDays(unSelectOffdays);
        console.log("offdays: ", selectedOffDays);
      }
      console.log("Provider: ", provider);
    } else if (provider === null && isEdit) {
      setIsNew(true);
      setIsEdit(false);
    }
  }, [provider]);

  const addProvider = () => {
    setProvider(null);
    // console.log("provider: ",provider);
    setIsNew(true);
    setIsEdit(false);
  };
  // useEffect(()=>{
  //   console.log('days updated',offDays);
  // },[offDays])

  // const onChange = ({value}) => {
  //   setValue(value);
  // };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>Providers</h4>
        {filter && <Toggle
        name={'Active'}
        value={'Active'}
    checked={isWorking}
    onChange={()=>setActive(act=>!act)} 
    className='custom-toggle'
    icons={false}/>}
        <button
          className="add-provider-btn"
          onClick={() => {
            setFilter(false);
            return !isEdit ? setIsNew(true) : setProvider(null)
          }}
        >
          Add provider
        </button>
      </div>
      {isNew ? (
        <Formik
          enableReinitialize={true}
          initialValues={{
            email: email,
            // password: password,
            name: name,
            address: address,
            location: location,
            inTime: inTime,
            outTime: outTime,
            phone: phone,
            specialist: specialist,
            offDays: selectedOffDays,
            services: selectedServices,
            onDays:onDays,
            active:active,
            image:image
          }}
          validate={(values) => {
            console.log("Values: ", values);
             const re = /^[0-9\b]+$/;
            values.phone.replace(/[^\d]/g, '')
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            if (!provider) {
              var onDays=[];
              var date = new Date();
              date.setDate(date.getDate() - 1);
              for (var i = 0; i < 7; i++) {
                date.setDate(date.getDate() + 1);
                console.log("date: ", date.toLocaleDateString());
                var day={
                  date:date.toLocaleDateString(),
                  bookedSlots:[]
                }
                onDays.push(day);
              }
              values.onDays=onDays;
              values.password = "11234";
              values.active = false;
              await addDoc(collection(db, "Providers"), values);
              setIsNew(false);
              setTimeout(() => {
                alert(
                  JSON.stringify(
                    { values, password: "1234", active: false },
                    null,
                    2
                  )
                );
                setSubmitting(false);
              }, 400);
            } else {
              console.log("Id:", provider.id);
              // var onDays=[];
              // var date = new Date();
              // date.setDate(date.getDate() - 1);
              // for (var i = 0; i < 7; i++) {
              //   date.setDate(date.getDate() + 1);
              //   console.log("date: ", date.toLocaleDateString());
              //   var day={
              //     date:date.toLocaleDateString(),
              //     bookedSlots:[]
              //   }
              //   onDays.push(day);
              // }
              // values.onDays=onDays;
              console.log("Values: ",values)
              await setDoc(doc(db, "Providers", provider.id), values);
              setIsNew(false);
              setTimeout(() => {
                alert(
                  JSON.stringify(
                    { values, active: false },
                    null,
                    2
                  )
                );
                setSubmitting(false);
              }, 400);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div class="container px-4" style={{ marginTop: "30px" }}>
                <div class="row gx-5 gy-3">
                  <div class="col-md-6 col-sm-6 item">
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />
                  </div>
                  <div class="col-md-6 col-sm-6 item">
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  {/* <div class="col-md-6 col-sm-6 item">
                    <Field type="password" name="password" placeholder='Password'/>
                    <ErrorMessage name="password" component="div" />
                  </div> */}
                  <div class="col-md-6 col-sm-6 item">
                    <Field type="text" name="phone" placeholder="Phone" />
                    <ErrorMessage name="phone" component="div" />
                  </div>
                  <div class="col-md-6 col-sm-6 item">
                    <Field type="text" name="location" placeholder="Location" />
                    <ErrorMessage name="location" component="div" />
                  </div>
                  <div class="col-md-6 col-sm-6 item">
                    <Field type="text" name="address" placeholder="Address" />
                    <ErrorMessage name="address" component="div" />
                  </div>
                  <div class="col-md-6 col-sm-6 item">
                    <Field type="text" name="inTime" placeholder="In Time" />
                    <ErrorMessage name="inTime" component="div" />
                  </div>
                  <div class="col-md-6 col-sm-6 item">
                    <Field type="text" name="outTime" placeholder="Out Time" />
                    <ErrorMessage name="outTime" component="div" />
                  </div>

                  <div class="col-md-6 col-sm-6 item">
                    <Field
                      type="text"
                      name="specialist"
                      placeholder="Specialist"
                    />
                    <ErrorMessage name="specialist" component="div" />
                  </div>
                  <div class="col-md-6 col-sm-6 item">
                    {
                      services && services.length > 0 && (
                        <Field
                          className="custom-select"
                          name="services"
                          options={services}
                          component={CustomSelect}
                          placeholder="Select multiple services"
                          isMulti={true}
                        />
                      )
                    }
                  </div>
                  <div class="col-md-8 col-sm-8 item">
                    <div role="group" aria-labelledby="checkbox-group">
                      <label>Off Days:</label>
                      {offDays &&
                        offDays.map((day) => (
                          <label>
                            <Field
                              type="checkbox"
                              name="active"
                              className="day-checkbox"
                              // value={day.day}
                            />
                            {day.day}
                          </label>
                        ))}
                    </div>
                    {/* <div id="checkboxes">
  <label>Off days</label>
  <ul style={{paddingLeft:'0'}}>
    {offDays.map((day,idx)=> <li className="day"><input type="checkbox" name="offDays" className="day-checkbox" onChange={()=>handleCheckbox(idx)}/>{day.day}</li>)}
  </ul>
</div> */}
                  </div>
                  <div
                    class="col-md-2 col-sm-2 item"
                    style={{ paddingLeft: "0" }}
                  >
                    <button
                      type="submit"
                      style={{
                        background: "#02704A",
                        color: "white",
                        border: "0",
                      }}
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                  <div class="col-md-1 col-sm-1 item">
                    <button
                      type="button"
                      onClick={() => {
                        setIsNew(false);
                        setFilter(true);
                      }}
                      style={{ border: "0" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div class="container px-4" style={{ marginTop: "30px" }}>
          <div class="row gx-5 gy-3">
            {filteredProviders.length > 0 &&
              filteredProviders.map((item, idx) => (
                <div class="col-md-6 col-sm-6 item">
                  <div
                    class="p-3"
                    style={{
                      background: "white",
                      borderRadius: "5px",
                      width: "-webkit-fill-available",
                    }}
                  >
                    <div
                      class="row"
                      style={{
                        background: "#E7EDE5",
                        margin: "auto",
                        padding: "10px 0px",
                        borderRadius: "5px",
                      }}
                    >
                      <div class="col-md-10">
                        <div>{item.name}</div>
                        <div>{item.specialist}</div>
                      </div>
                      <div class="col">
                        <img
                          src="../assets/icons8-menu-vertical-30.png"
                          className="doctor-icon"
                          style={{ marginTop: "13px" }}
                          alt="logo"
                          onClick={() => handleShowLabel(idx)}
                        />
                        {showLabel[idx] && (
                          <label style={{ position: "absolute" }}>
                            <div onClick={() => {
                              setProvider(item);
                              setFilter(false)}}>Edit</div>
                            <div onClick={() => removeProvider(item)}>
                              Delete
                            </div>
                          </label>
                        )}
                      </div>
                    </div>
                    <div>
                      <div class="row gy-2" style={{ marginTop: "0px" }}>
                        <div
                          class="col-md-8"
                          style={{ display: "inline-flex" }}
                        >
                          <div class="row gy-1" style={{ marginTop: "0px" }}>
                            <div
                              class="col-md-12"
                              style={{ display: "inline-flex" }}
                            >
                              <img
                                src="../assets/icons8-envelope-30.png"
                                className="doctor-icon"
                                alt="logo"
                              />
                              <p className="item-value">{item.email}</p>
                            </div>
                            <div
                              class="col-md-12"
                              style={{ display: "inline-flex" }}
                            >
                              <img
                                src="../assets/icons8-phone-24.png"
                                className="doctor-icon"
                                alt="logo"
                              />
                              <p className="item-value">{item.phone}</p>
                            </div>
                            <div
                              class="col-md-12"
                              style={{ display: "inline-flex" }}
                            >
                              <img
                                src="../assets/icons8-location-50.png"
                                className="doctor-icon"
                                alt="logo"
                              />
                              <p className="item-value">{item.location}</p>
                            </div>
                          </div>
                          {/* <img
                            src="../assets/icons8-doctor-64-1.png"
                            className="doctor-icon"
                            alt="logo"
                          />
                          <p className="item-value">{item.providerName}</p> */}
                        </div>
                        <div
                          class="col-md-4"
                          style={{ display: "inline-flex" }}
                        >
                          <img
                            style={{ height: "100px", width: "100px" }}
                            src={item.image}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
}) => {
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
  };

  const getValue = () => {
    console.log("field: ", field);
    if (options && options.length > 0 && field?.value?.length > 0) {
      return options.filter(
        (option) => field?.value?.indexOf(option.value) >= 0
      );
    } else {
      return [];
    }
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};
