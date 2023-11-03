import React, { useState } from "react";

function AddStudent({ handleSubmit }) {
  const [id, setId] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  let student = { _id: id, firstName: fName, lastName: lName };

  return (
    <div
      class="modal fade"
      id="addId"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Student</h5>
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
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setId(event.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setFname(event.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setLname(event.target.value);
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
              onClick={() => handleSubmit(student)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
