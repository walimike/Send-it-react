import React from "react";
import SingleParcel from "./SingleParcel";

const ParcelTable = props => {
  console.log(props.parcels)
  const parcels = props.parcels ? props.parcels : [];
  const parcelItems = parcels.map(parcel => (
    <SingleParcel
      key={parcel.parcelid}
      id={parcel.parcelid}
      dateCreated={parcel.date_created}
      description={parcel.parcel_name}
      pickupLocation={parcel.parcel_source}
      destination={parcel.parcel_destination}
      price="UGX 3000"
      status={parcel.parcel_status}
    />
  ));

  return (
    <div className="parcel-details">
      <table className="parcel-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Description</th>
            <th>Pickup location</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>{parcelItems}</tbody>
      </table>
    </div>
  );
};

export default ParcelTable;