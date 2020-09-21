import React, { useEffect, useState } from 'react';
import Posts from '../../Post';
import '../../../styles/Mid.css';
import axios from '../../../utils/axios';
import { useParams } from 'react-router-dom';
import ConnectionsModal from './ConnectionsModal';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const MainHomeContainer = () => {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [modelView, setModelView] = useState(false);
  const [editModalView, setEditModalView] = useState(false);
  const [deleteModalView, setDeleteModalView] = useState(false)

  const _toggleModal = () => {
    setModelView(!modelView);
  }

  const _toggleEditModal = () => {
    setEditModalView(!editModalView);
  }

  const _toggleDeleteModal = () => {
    setDeleteModalView(!deleteModalView);
  }

  const _fetchPosts = async () => {
    try {
      const res = await axios(`/group/${id}/post`);
      const res2 = await axios(`/group/${id}/get-group-name`);
      setPosts(res.data);
      setGroupName(res2.data[0].name);
    } catch (err) {
      console.log({ err });
    }
  }

  const _removePost = (index) => {
    const arr = [...posts];
    arr.splice(index, 1);
    setPosts(arr);
  }

  useEffect(() => {
    _fetchPosts();
  }, [id]);

  return (
    <>
      <div className="col-8 mh-100 mid-col text-left bg-light p-3">
        <div className="row">
          <div className="col-md-6">
            <p className="h5 font-weight-bold py-3">{groupName}</p>
          </div>
          <div className="col-md-6">
            <button onClick={_toggleDeleteModal} className="btn btn-danger float-right mr-2">Delete</button>
            <button onClick={_toggleEditModal} className="btn btn-secondary float-right mr-2">Edit</button>
            <button onClick={_toggleModal} className="btn btn-primary float-right mr-2">Connections</button>
          </div>
        </div>
        <div className="posts p-3 overflow-auto">
          {
            posts.map((item, index) => <Posts remove={_removePost} key={item.id} index={index} item={item} />)
          }
        </div>
      </div>
      {
        modelView
        && (
          <ConnectionsModal closeModal={_toggleModal} id={id} />
        )
      }
      {
        editModalView
        && (
          <EditModal closeModal={_toggleEditModal} value={groupName} updateText={setGroupName} id={id} />
        )
      }
      {
        deleteModalView
        && (
          <DeleteModal closeModal={_toggleDeleteModal} id={id} />
        )
      }
    </>

  );
}

export default MainHomeContainer;
