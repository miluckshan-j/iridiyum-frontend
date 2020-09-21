import React from 'react';

function ProfileBanner() {
  return (
    <div className="container-fluid d-flex h-100 flex-column p-0">
      <div className="row">
        <div className="col">
          <div className="banner">
            <div className="banner-actions list-inline border border-grey float-right bg-white">
              <p className="list-inline-item px-1 mb-0">🖊️</p>
              <p className="list-inline-item px-1 mb-0">❌</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;
