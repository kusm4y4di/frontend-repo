// store/reducers.ts

const initialState = {
    loading: false,
    success: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_DATA':
        return {
          ...state,
          loading: true,
        };
      case 'UPDATE_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          success: true,
        };
      case 'UPDATE_DATA_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  