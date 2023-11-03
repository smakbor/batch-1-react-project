import React, { useState } from "react";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";

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

function ShowStudent() {
  //   const res = fetch("http://http://127.0.0.1:6060/api/getStudent");

  const defaultStudents = [
    { _id: 101, firstName: "Mominul", lastName: "Shimanto" },
    { _id: 102, firstName: "Labib", lastName: "Aziz" },
    { _id: 103, firstName: "Abdullah", lastName: "Naiem" },
    { _id: 104, firstName: "Ibrahim", lastName: "Molla" },
    { _id: 105, firstName: "Mahibul", lastName: "Afrid" },
  ];
  //main state
  const [students, setStudents] = useState(defaultStudents);

  // add functionality
  const handleSubmit = (data) => {
    setStudents([...students, data]);
  };

  const handleDelete = (id) => {
    const copyState = [...students];
    const filteredData = copyState.filter((item) => item._id !== id);
    setStudents(filteredData);
  };
  // edit functionality
  const [editData, setEditData] = useState("");
  const [id, setId] = useState("");
  const handleEdit = (id) => {
    const findData = students.find((item) => item._id == id);
    setEditData(findData);
    setId(id);
  };

  const handleEditSubmit = (data) => {
    const findI = students.findIndex((item) => item._id == id);
    const copyState = [...students];
    copyState[findI] = data;
    setStudents(copyState);
  };
  return (
    <div>
      <div style={{ width: "700px", marginTop: "5rem", margin: "0 auto" }}>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addId"
        >
          Add Student
        </button>
        <table class="table  ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {students?.length > 0 &&
              students.map((std) => {
                return (
                  <tr>
                    <th>{std._id}</th>
                    <td>{std.firstName}</td>
                    <td>{std.lastName}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleEdit(std._id)}
                        data-bs-toggle="modal"
                        data-bs-target="#editId"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(std._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <AddStudent handleSubmit={handleSubmit} />

      <div
        class="modal fade"
        id="editId"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Student</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="form-label">ID</label>
                  <input
                    type="number"
                    class="form-control"
                    value={editData?._id}
                    onChange={(event) => {
                      setEditData({
                        ...editData,
                        _id: event.target.value,
                      });
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={editData?.firstName}
                    onChange={(event) => {
                      setEditData({
                        ...editData,
                        firstName: event.target.value,
                      });
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={editData?.lastName}
                    onChange={(event) => {
                      setEditData({
                        ...editData,
                        lastName: event.target.value,
                      });
                    }}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => handleEditSubmit(editData)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowStudent;
