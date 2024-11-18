import {commonApi} from './commonApi'
import {serverUrl} from './server'

export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/video`,reqBody);
}
 export const getvideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/video`,"")
 }

 export const removeVideoApi = async(id)=>{
        return await commonApi('DELETE',`${serverUrl}/video/${id}`,{})
 }

//api to add video to history
export const addHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody);
}