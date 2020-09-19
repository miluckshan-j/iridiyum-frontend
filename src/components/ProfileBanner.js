import React from 'react';

function ProfileBanner() {
  return (
    <div class="container-fluid d-flex h-100 flex-column p-0">
      <div class="row">
        <div class="col">
          <div class="banner">
            <div class="banner-actions list-inline border border-grey float-right bg-white">
              <p class="list-inline-item px-1 mb-0">🖊️</p>
              <p class="list-inline-item px-1 mb-0">❌</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner;
