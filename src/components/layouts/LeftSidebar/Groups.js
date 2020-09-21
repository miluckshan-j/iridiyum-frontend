import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../../utils/axios';

const Groups = (props) => {
  const [showEditModal, setshowEditModal] = useState(false)
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState('');
  const [inputMode, setInputMode] = useState(false);
  const { user } = props;
  const id = user.id;


  const _fetchGroupData = async () => {
    try {
      const res = await axios.get(`/user/${id}/group`);
      setGroups(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    _fetchGroupData();
  }, []);

  const _addGroup = async () => {
    if (inputMode) {
      try {
        const data = {
          user_id: user.id,
          name: newGroup,
        }
        await axios.post('/group', data);
        await _fetchGroupData();
        setInputMode(false);
        setNewGroup('');
      } catch (err) {
        console.log(err);
      }
    } else {
      setInputMode(true);
    }
  }

  const _onChange = (e) => {
    setNewGroup(e.target.value);
  }

  return (
    <>
      <div className="group-items">
        <NavLink to="/">
          <p className="group-item-text font-weight-light">All</p>
        </NavLink>
        {groups.map(item => (
          <NavLink key={item.id} to={`/group/${item.id}`}>
            <p key={item.id} className="group-item-text font-weight-light">{item.name}</p>
          </NavLink>
        ))}
      </div>
      <div className="group-items">
        {inputMode && <input value={newGroup} onChange={_onChange} style={{ width: '50%', marginRight: '1rem' }} />}
        <span onClick={_addGroup} role="img" aria-label="add-group" className="group-item-add font-weight-light cursor">➕</span>
      </div>
    </>
  );
}

export default Groups;
