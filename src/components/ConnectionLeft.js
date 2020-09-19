import React from 'react';
import '../css/ConnectionLeft.css';

function ProfileLeft() {
  return (
    <div className="col-2 mh-100 left-col text-white p-0">
      <img src="./banner.jpg" className="img-fluid" alt="Banner" />
      <div className="mx-auto profile-picture mt-n6">
        <img src="profile-picture.jpg" className="img-fluid rounded-circle" alt="Banner" />
      </div>
      <p className="h5 font-weight-bold text-center">Jalangan Visvanathan</p>
      <p className="h6 font-weight-bold text-center text-muted">@visvaj</p>
      <p className=" font-weight-light text-center px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <div className="text-center connection-btn">
        <form>
          <div className="form-group">
            <button type="submit" className="btn btn-purple px-4">Connect</button>
          </div>
        </form>
      </div>
      <hr />
      <div className="group px-3 text-left">
        <div className="group-items">
          <p className="group-item-text font-weight-bold">University - <span className="font-weight-light">University of London</span>
          </p>
        </div>
        <div className="group-items">
          <p className="group-item-text font-weight-bold">Major - <span className="font-weight-light">MA. in Accounting</span>
          </p>
        </div>
        <div className="group-items">
          <p className="group-item-text font-weight-bold">Gender - <span className="font-weight-light">Male</span>
          </p>
        </div>
        <div className="group-items">
          <p className="group-item-text font-weight-bold">Birthday - <span className="font-weight-light">12th November 1972</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeft;
