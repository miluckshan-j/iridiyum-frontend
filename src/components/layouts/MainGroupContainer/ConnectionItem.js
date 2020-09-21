import React from 'react'
import axios from '../../../utils/axios';

const ConnectionItem = (props) => {
  const { connection, id } = props;

  const _addToGroup = async () => {
    try {
      await axios.post(`/group/${id}/connection/${connection.user_id}`);
    } catch (err) {
      console.log(err);
    }
  }

  const _removeToGroup = async () => {
    try {
      await axios.delete(`/group/${id}/connection/${connection.user_id}`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="col-12 mt-1" key={connection.user_id}>
      {connection.name}
      <button onClick={_removeToGroup} type="button" className="btn btn-danger float-right">Remove</button>
      <button onClick={_addToGroup} type="button" className="btn btn-primary  float-right mr-1">Add</button>
    </div>
  )
}

export default ConnectionItem
