import React from 'react';

function Posts() {
  return (
    <div class="card mb-5">
      <div class="card-body">
        <div class="list-inline">
          <img src="./profile-picture.jpg" class="post-profile-picture" alt="" />
          <div class="list-inline-item">
            <p class="mb-0 pt-1 text-purple font-weight-bold">Miluckshan Jalangan</p>
            <p class="mb-0 text-muted post-date">August 12 2020 at 08.00am</p>
          </div>
          <p class="float-right px-1">❌</p>
          <p class="float-right px-1">🖊️</p>
        </div>
        <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
        <div class="post-actions">
          <div class="list-inline float-right">
            <p class="list-inline-item mb-0">💬 (1)</p>
            <p class="list-inline-item mb-0">🔗</p>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Posts;