import React, { useEffect, useState } from "react";

function EditStudent({ editData, editSubmit }) {
  console.log(editData);
  const [updatedData, setUpdatedData] = useState(editData);

  useEffect(() => {
    setUpdatedData(editData);
  }, [editData]);
  return (
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
                  defaultValue={updatedData?._id}
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setUpdatedData({ ...updatedData, _id: event.target.value });
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={updatedData?.firstName}
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setUpdatedData({
                      ...updatedData,
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
                  defaultValue={updatedData?.lastName}
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setUpdatedData({
                      ...updatedData,
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
              onClick={() => editSubmit(updatedData)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
