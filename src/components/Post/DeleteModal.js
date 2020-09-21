import React from 'react'
import axios from '../../utils/axios';

const DeleteModal = (props) => {
  const { remove, id, closeModal } = props;

  const _deletePost = async () => {
    try {

      await axios.delete(`/post/${id}`);
      remove();
      closeModal();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="modal fade show" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Update Post</h5>
            <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this post ?</p>
          </div>
          <div className="modal-footer">
            <button onClick={_deletePost} type="button" className="btn btn-danger">Delete Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
