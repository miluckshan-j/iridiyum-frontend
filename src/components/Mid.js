import React from 'react';
import Posts from './Posts';
import PostForm from './PostForm';
import '../css/Mid.css';

function Mid() {
  return (
    <div class="col-8 mh-100 mid-col text-left bg-light p-3">
      <p class="h5 font-weight-bold py-3">My Posts</p>
      <div class="posts p-3 overflow-auto">
        < PostForm />
        <hr />
        < Posts />
        < Posts />
        < Posts />
      </div>
    </div>

  );
}

export default Mid;
