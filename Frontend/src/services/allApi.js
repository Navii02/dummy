import {commonApi} from './commonApi'
import {serverUrl} from './server'

export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/video`,reqBody);
}