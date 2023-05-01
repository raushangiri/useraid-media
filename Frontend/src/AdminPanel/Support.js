import React from "react";

const Support = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Support</h2>

          <div className="col-sm-6 mx-auto">
            <label class="form-label">Choose Subject</label>
            <select type="text" className="form-control" placeholder="">
              <option value="">Select</option>
              <option value="">Balance Enquiry</option>
              <option value="">Payment Bank</option>
            </select>
          </div>
          <div className="col-sm-6 mx-auto">
            <label class="form-label mt-4">Inquiry/Question</label>
            <textarea
              type="text"
              rows="5"
              className="form-control"
              placeholder=""
            />
          </div>
          <center className="my-4">
            <button type="submit" class="btn btn-info">
              Submit
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Support;
