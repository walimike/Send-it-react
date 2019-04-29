import React from 'react';

const CreateParcel = (props) =>{
    const {createParcels, source, destination, destinationChange,
    sourceChange, parcelName, parcelNameChange, price, priceChange}=props;

  return (
    <div>
    
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" value ={parcelName}
                    onChange={parcelNameChange} />
            <label htmlFor="textarea1">Parcel Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" value ={source}
                    onChange={sourceChange} />
            <label htmlFor="textarea1">Source</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" value ={destination}
                    onChange={destinationChange} />
            <label htmlFor="textarea1">Destination</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" type='number' value ={price}
                    onChange={priceChange} />
            <label htmlFor="textarea1">Price</label>
          </div>
        </div>
        <button className="btn" onClick={createParcels}>CREATE</button>
      </form>
    </div>
  )
}

export default CreateParcel