import React, { useState } from 'react'
import LabeledTextAreaField from '../LabeledFields/fields/TextArea';
import axios from '../../utils/axios';

const EditModal = (props) => {
  const { closeModal, updateText, value, id, userId } = props;
  const [text, setText] = useState(value);

  const _updatePost = async () => {
    try {
      const data = {
        user_id: userId,
        text,
        // TODO add comments
        is_comment_enabled: 1,
      }
      await axios.put(`/post/${id}`, data);
      updateText(text);
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
            <form>
              <LabeledTextAreaField label="New Post" value={text} onChange={setText} />
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={_updatePost} type="button" className="btn btn-primary">Update Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal
