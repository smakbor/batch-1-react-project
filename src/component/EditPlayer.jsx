import React, { useEffect, useState } from "react";

function EditPlayer(props) {
  const { editData, handleEdit } = props;
  const [updatedPlayer, setUpdatedPlayer] = useState({});
  useEffect(() => {
    setUpdatedPlayer(editData);
  }, [editData]);
  console.log(updatedPlayer);

  return (
    <div
      class="modal fade"
      id="editModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Edit Player
            </h5>
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
                <label for="exampleInputEmail1" class="form-label">
                  Id
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={updatedPlayer?._id}
                  onChange={(event) =>
                    setUpdatedPlayer({
                      ...updatedPlayer,
                      _id: event.target.value,
                    })
                  }
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={updatedPlayer?.name}
                  onChange={(event) =>
                    setUpdatedPlayer({
                      ...updatedPlayer,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Batting Average
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={updatedPlayer?.battingAvg}
                  onChange={(event) =>
                    setUpdatedPlayer({
                      ...updatedPlayer,
                      battingAvg: event.target.value,
                    })
                  }
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Type
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={updatedPlayer?.type}
                  onChange={(event) =>
                    setUpdatedPlayer({
                      ...updatedPlayer,
                      type: event.target.value,
                    })
                  }
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
              onClick={() => handleEdit(updatedPlayer)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPlayer;
