import React from "react";

const WithdrawHistory = () => {
  return (
    <div className="AdminContainer">
      <div className="row mx-0 p-4">
        <div className="col-sm-12 rounded p-5 metalic-color ">
          <h2 className="mb-4">Withdraw History</h2>
          <table className="table table-striped text-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name </th>
                <th scope="col">Amount</th>
                <th scope="col">Inc. Type</th>
                <th scope="col">Date</th>
                <th scope="col">Remark</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row px-0 mx-0" className="text-white">
                  1
                </th>
                <td className="text-white"></td>
                <td className="text-white"></td>
                <td className="text-white"></td>
                <td className="text-white"></td>
                <td className="text-white"></td>
                <td className="text-white"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawHistory;
