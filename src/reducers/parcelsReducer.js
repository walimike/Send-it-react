export const createParcel = (state = {}, action) => {
    switch (action.type) {
      case 'CREATE_PARCEL':
        return  action.payload
      default:
        return state;
    }
  };
