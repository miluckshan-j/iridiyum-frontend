import React, { useState } from 'react';
import axios from '../utils/axios';

const PostForm = (props) => {
  const { user, fetchPosts } = props;
  const [text, setText] = useState('');

  const _onChange = (e) => {
    if (text.length < 250) {
      setText(e.target.value);
    }
  }

  const _onSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = {
        is_comment_enabled: 0,
        text,
        user_id: user.id,
      }
      await axios.post('/post', data);
      await fetchPosts();
    } catch (err) {
      console.length(err)
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={_onSubmit}>
          <div className="form-group">
            <label htmlFor="post">What do you want to share now?</label>
            <textarea value={text} onChange={_onChange} className="form-control" id="post" rows="4" maxLength="250"></textarea>
          </div>
          <span className="text-muted">{text.length}/250 Characters</span>
          <button type="submit" className="btn btn-purple px-4">Post</button>
        </form>
      </div>
    </div>
  );

}

export default PostForm;
