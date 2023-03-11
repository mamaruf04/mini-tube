import axios from "../../utils/axios";

export const getTags = async () =>{
    const responce = await axios.get("/tags")

    return responce.data;
}