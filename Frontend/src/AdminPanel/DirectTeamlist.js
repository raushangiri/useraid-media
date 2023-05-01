import React from "react";

function DirectTeamlist(props) {
  const { referrel_id, name, userid, account_status, createdAt } = props;
  const dateObject = new Date(createdAt);

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // Add 1 to account for zero-based indexing
  const date = dateObject.getDate();
  return (
    <>
      <tbody>
        <tr>
          <td className="text-white">{referrel_id}</td>
          <td className="text-white">{userid}</td>
          <td className="text-white">{name}</td>
          <td className="text-white">{`${date}-${month}-${year}`}</td>
          <td className="text-white">{account_status}</td>
        </tr>
      </tbody>
    </>
  );
}

export default DirectTeamlist;
