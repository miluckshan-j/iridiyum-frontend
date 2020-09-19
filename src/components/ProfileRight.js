import React from 'react';
import '../css/ProfileLeft.css';

function ProfileRight() {
  const headerBg = {
    backgroundColor: "#4a148c"
  }

  return (
    <div class="col-10 mh-100 mid-col text-left bg-light p-3">
      <form>
        <p class="h5 font-weight-bold py-3">Identity</p>
        <div class="form-row align-items-center">
          <div class="col-12">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" value="Miluckshan Jalangan" placeholder="Miluckshan Jalangan" />
            </div>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-6">
            <div class="form-group">
              <label for="username">Username</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                <input type="text" class="form-control" id="username" value="milkyway" placeholder="milkyway" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" value="milkyrox@gmail.com" placeholder="milkyrox@gmail.com" />
            </div>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-6">
            <div class="form-group">
              <label for="dob">Date of Birth</label>
              <input type="date" class="form-control" id="dob" />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="gender">Gender</label>
              <select class="form-control" id="gender">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                <option>None of your business</option>
              </select>
            </div>
          </div>
        </div>
        <p class="h5 font-weight-bold py-3">College</p>
        <div class="form-row align-items-center">
          <div class="col-6">
            <div class="form-group">
              <label for="university">University</label>
              <select class="form-control" id="university">
                <option>Sri Lanka Institute of Information Technology</option>
                <option>University of Bedfordshire</option>
                <option>University of London</option>
                <option>University of Whatever</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="degree">Degree</label>
              <select class="form-control" id="degree">
                <option>B.Sc. Computer Science</option>
                <option>University of Bedfordshire</option>
                <option>University of London</option>
                <option>University of Whatever</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-12">
            <div class="form-group">
              <button type="submit" class="btn btn-purple px-4 float-right my-3">Update</button>
            </div>
          </div>
        </div>
        <p class="h5 font-weight-bold py-3 mr-auto">Password</p>
        <div class="form-group">
          <button type="submit" class="btn btn-purple px-4">Change Password</button>
        </div>
      </form>
    </div>
  );

}

export default ProfileRight;
