import axios from '../helpers/axios'
import {locationConstants} from './constants'


export const getCrimeLocation = () =>{
    return async dispatch =>{
        dispatch({type: locationConstants.GET_LOCATION_REQUEST})
        const res = await axios.get('/getlocation')
        console.log(res)
        if(res.status === 200){
            const {lxns} = res.data
            dispatch({
                type: locationConstants.GET_LOCATION_SUCCESS,
                payload: { locations: lxns}
            })
        }else{
            dispatch({
                type: locationConstants.GET_LOCATION_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}

