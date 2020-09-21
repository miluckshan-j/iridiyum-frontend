import React, { useState } from 'react';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

const getAuthStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.user,
);


function Posts(props) {
  const { item, index, remove } = props;
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [text, setText] = useState(item.text);
  const user = useSelector(getAuthStatus);

  const date = new Date(item.created_at);

  const _toggleComments = () => {
    setShowComments(!showComments);
  }

  const _toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  }

  const _toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  }

  const _removePost = () => {
    remove(index);
  }

  return (
    <>
      <div className="card mb-5">
        <div className="card-body">
          <div className="list-inline">
            <img src="./profile-picture.jpg" className="post-profile-picture" alt="" />
            <div className="list-inline-item">
              <p className="mb-0 pt-1 text-purple font-weight-bold">{item.name}</p>
              <p className="mb-0 text-muted post-date">{date.toLocaleDateString()}</p>
            </div>
            {
              user.id === item.user_id
              && (
                <>
                  <span onClick={_toggleDeleteModal} role="img" aria-label="delete" className="float-right px-1 cursor">❌</span>
                  <span onClick={_toggleEditModal} role="img" aria-label="edit" className="float-right px-1 cursor">🖊️</span>
                </>
              )
            }
          </div>
          <p className="mt-2">{text}</p>
          <div className="post-actions">
            <div className="list-inline float-right">
              <span onClick={_toggleComments} role="img" aria-label="comment" className="list-inline-item mb-0 cursor">💬 (1)</span>
              <span role="img" aria-label="share" className="list-inline-item mb-0 cursor">🔗</span>
            </div>
          </div>
        </div>
      </div>
      {
        showComments
        && (
          <p>comments</p>
        )
      }
      {
        showEditModal
        && (
          <EditModal closeModal={_toggleEditModal} value={text} id={item.id} updateText={setText} userId={item.user_id} />
        )
      }
      {
        showDeleteModal
        && (
          <DeleteModal closeModal={_toggleDeleteModal} id={item.id} remove={_removePost} />
        )
      }

    </>
  );

}

export default Posts;
