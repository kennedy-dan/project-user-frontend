import axios from '../helpers/axios'
import {reportConstants} from './constants'

export const addcrimeReport = (payload) => {
    return async dispatch => {
        dispatch({type: reportConstants.ADD_REPORT_REQUEST})
    
            const res = await axios.post("/crimereport", payload);
            if(res.status === 200){
                dispatch({
                    type: reportConstants.ADD_REPORT_SUCCESS,
                    payload: {report: res.data.report}
                })
            }else {
                dispatch({
                    type: reportConstants.ADD_REPORT_FAILURE,
                    payload: {error: res.data.error}
                })
            }

      
    }
}