import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import ConnectionItem from './ConnectionItem';

const getAuthStatus = createSelector(
  (state) => state.auth,
  (auth) => auth.user,
);


const ConnectionsModal = (props) => {
  const user = useSelector(getAuthStatus);
  const [connections, setConnections] = useState([]);

  const { id, closeModal } = props;

  const _fetchConnections = async () => {
    try {
      const res = await axios.get(`/user/${user.id}/connection`)
      console.log({ conmod: res.data, userId: user.id });
      setConnections(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    _fetchConnections();
  }, [])

  return (
    <div className="modal fade show" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Group Connections</h5>
            <button type="button" onClick={closeModal} className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body row">
            {
              connections.map(connection => (
                <ConnectionItem connection={connection} id={id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectionsModal
