import { locationConstants } from "../actions/constants";

const initState = {
    locations : [],
    loading : false,
    error: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case locationConstants.GET_LOCATION_SUCCESS:
        state = {
            ...state,
            locations: action.payload.locations,
            loading: false
          };
          break;

        case locationConstants.GET_LOCATION_REQUEST:
            state = {
                ...state,
                loading:  true
            }
            break;
        case locationConstants.GET_LOCATION_FAILURE: 
            state = {
                ...initState
            }    
            break;
    }
    return state
}