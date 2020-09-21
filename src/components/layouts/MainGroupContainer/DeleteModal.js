import React from 'react'
import { useHistory } from 'react-router-dom';
import axios from '../../../utils/axios';

const DeleteModal = (props) => {
  let history = useHistory();
  const { id, closeModal } = props;

  const _deletePost = async () => {
    try {

      await axios.delete(`/group/${id}`);
      closeModal();
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="modal fade show" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Delete Group</h5>
            <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this group ?</p>
          </div>
          <div className="modal-footer">
            <button onClick={_deletePost} type="button" className="btn btn-danger">Delete Group</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
