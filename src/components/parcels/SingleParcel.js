import React from "react";

const SingleParcel = props => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.description}</td>
      <td>{props.pickupLocation}</td>
      <td>{props.destination}</td>
      <td>{props.price}</td>
      <td>{props.status}</td>
    </tr>
  );
};

export default SingleParcel;