import React from "react";
import "./style.css"
import { SetUser } from "../../Platform/Api";
import { useState } from "react";
import { useGlobalContext } from "../../Context";

export const EditPage = () => {
  const {profile, setProfile} = useGlobalContext();

  const [user, setUser] = useState(
    {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        position: '',
        email: '',
        phone: '', 
        birthday: '',
        profileIMG: '',
    }
  )
  const handleSubmit = (e) => {
    e.preventDefault();   
    e.target.reset();

    profile.firstName = user.firstName;
  };

  const SetList = async () => {
    const result = await SetUser(user)
    if(result.data) {
      console.log(result.data)
    } else {
      console.log("error")
    }
  };

  return (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <div className="form-divs">
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  name="firstname"
                  onChange={e => setUser({...user, firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={e => setUser({...user, lastName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="">Age</label>
                <input
                  type="number"
                  name="age"
                  className="input"
                  placeholder="Age"
                  onChange={e => setUser({...user, age: e.target.value })}                />
              </div>
              <div>
                <label htmlFor="">Gender</label>
                <div className="gender-box">
                  <span>
                    <input
                      type="radio"
                      className="gender"
                      name="gender"
                      value="male"
                      onChange={e => setUser({...user, gender: e.target.value })}
                    />
                    <label htmlFor="">Male</label>
                  </span>
                  <span>
                    <input
                      type="radio"
                      className="gender"
                      name="gender"
                      value="female"
                      onChange={e => setUser({...user, gender: e.target.value })}
                    />
                    <label htmlFor="">Female</label>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-divs">
              <div>
                <label htmlFor="">Position</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Position"
                  name="position"
                  onChange={e => setUser({...user, position: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  onChange={e => setUser({...user, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone Number"
                  onChange={e => setUser({...user, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="">Date of Birth</label>
                <input
                  type="date"
                  name="birth"
                  className="input"
                  placeholder="dd.mm.yy"
                  aria-describedby="date-format"
                  min="1900-03-01"
                  max="2031-01-01"
                  onChange={e => setUser({...user, birthday: e.target.value })}
                />
              </div>
              <div>
                <p>Profile Image</p>
                <input
                  type="file"
                  className="input file-upload"
                  name="picture"
                  accept="image/*"
                  onChange={e => setUser({...user, profileIMG: e.target.files[0] })}
                ></input>
              </div>
              <button className="form-button" onClick={SetList}>Submit Changes</button>
            </div>
          </div>
        </form>
      </div>
  );

};
  