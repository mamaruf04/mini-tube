import axios from "../../utils/axios";

export const getVideos = async () =>{
    const responce = await axios.get("/videos")

    return responce.data;
}