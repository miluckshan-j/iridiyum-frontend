import React, { useEffect, useState } from 'react';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import Posts from '../Post';
import '../../styles/Mid.css';
import PostForm from '../PostForm';

import axios from '../../utils/axios';

const getAuthStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.user,
);


const MainHomeContainer = () => {
  const user = useSelector(getAuthStatus);
  const [posts, setPosts] = useState([]);

  const _fetchPosts = async () => {
    try {
      const res = await axios(`/user/${user.id}/post`);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const _removePost = (index) => {
    const arr = [...posts];
    arr.splice(index, 1);
    setPosts(arr);
  }

  useEffect(() => {
    _fetchPosts();
  }, []);

  return (
    <div className="col-8 mh-100 mid-col text-left bg-light p-3">
      <p className="h5 font-weight-bold py-3">Your Posts</p>
      <div className="posts p-3 overflow-auto">
        < PostForm user={user} fetchPosts={_fetchPosts} />
        <hr />
        {
          posts.map((item, index) => <Posts remove={_removePost} key={item.id} index={index} item={item} />)
        }
      </div>
    </div>

  );
}

export default MainHomeContainer;
