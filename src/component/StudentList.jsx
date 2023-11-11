import React, { useState } from "react";
import AddPlayer from "./AddPlayer";
import EditData from "./EditPlayer";
import EditPlayer from "./EditPlayer";
//CRUD
//C for create
//R for Read
//U for Update
//D for Delete

//edit mechanism
//1st hosse amader id dhorte hobe ,,,je row ta amra edit korte cassci
//2nd hosse oi id diye main state er moddhe theke oi id tar data find korte hobe
//3rd ---> find kora obj ta new ekta useState a rakhte hobe and id ta ke o useState a rakhte hobe
// 4th ---> find kora data ta form er value te set kore dite hobe
//5th ---> onChange a je input k change kortee cassi tar property te event.target.value set korbo and baki data spread kore unchange rekhe dibo
//6th ---> submit button a click hole oi edit data ta main state er je index a ace sei index find korbo ,,,oi index a replace kore dibo amader editData diye

const defaultPlayersInfo = [
  { _id: 101, name: "Masrafee", battingAvg: 36.67, type: "boller" },
  { _id: 102, name: "Tamim", battingAvg: 50.65, type: "batter" },
  { _id: 103, name: "Sakib", battingAvg: 45.89, type: "allRounder" },
  { _id: 104, name: "Liton", battingAvg: 34.0, type: "batter" },
  { _id: 105, name: "Musfiq", battingAvg: 48.78, type: "batter" },
  { _id: 106, name: "Saif Uddin", battingAvg: 28.88, type: "allRounder" },
];
// props is an object

function StudentList() {
  const [state, setState] = useState(defaultPlayersInfo);
  const [editData, setEditData] = useState("");
  const [id, setId] = useState("");

  const handleGetData = (player) => {
    setState([...state, player]);
  };
  const editId = (id) => {
    const findData = state.find((item) => item._id === id);
    setEditData(findData);
    setId(id);
  };

  const handleEdit = (editPlayer) => {
    const copyState = [...state];
    const findInd = copyState.findIndex((item) => item._id === id);
    copyState[findInd] = editPlayer;
    setState(copyState);
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Batting Average</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {state?.map((player) => {
            return (
              <tr>
                <th>{player._id}</th>
                <td>{player.name}</td>
                <td>{player.battingAvg}</td>
                <td>{player.type}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => editId(player._id)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="btn btn-primary text-center"
        data-bs-toggle="modal"
        data-bs-target="#addModal"
      >
        Add Player
      </button>
      <AddPlayer handleGetData={handleGetData} />
      <EditPlayer editData={editData} handleEdit={handleEdit} />
    </div>
  );
}

export default StudentList;
