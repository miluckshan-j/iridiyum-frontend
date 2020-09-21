import React from 'react';
import '../../../styles/ProfileLeft.css';

function ProfileRight() {
  const headerBg = {
    backgroundColor: "#4a148c"
  }

  return (
    <div className="col-10 mh-100 mid-col text-left bg-light p-3">
      <form>
        <p className="h5 font-weight-bold py-3">Identity</p>
        <div className="form-row align-items-center">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value="Miluckshan Jalangan" placeholder="Miluckshan Jalangan" />
            </div>
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input type="text" className="form-control" id="username" value="milkyway" placeholder="milkyway" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" value="milkyrox@gmail.com" placeholder="milkyrox@gmail.com" />
            </div>
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" className="form-control" id="dob" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select className="form-control" id="gender">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                <option>None of your business</option>
              </select>
            </div>
          </div>
        </div>
        <p className="h5 font-weight-bold py-3">College</p>
        <div className="form-row align-items-center">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="university">University</label>
              <select className="form-control" id="university">
                <option>Sri Lanka Institute of Information Technology</option>
                <option>University of Bedfordshire</option>
                <option>University of London</option>
                <option>University of Whatever</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="degree">Degree</label>
              <select className="form-control" id="degree">
                <option>B.Sc. Computer Science</option>
                <option>University of Bedfordshire</option>
                <option>University of London</option>
                <option>University of Whatever</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-row align-items-center">
          <div className="col-12">
            <div className="form-group">
              <button type="submit" className="btn btn-purple px-4 float-right my-3">Update</button>
            </div>
          </div>
        </div>
        <p className="h5 font-weight-bold py-3 mr-auto">Password</p>
        <div className="form-group">
          <button type="submit" className="btn btn-purple px-4">Change Password</button>
        </div>
      </form>
    </div>
  );

}

export default ProfileRight;
