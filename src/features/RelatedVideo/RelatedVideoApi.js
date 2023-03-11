import axios from "../../utils/axios";

export const getRelatedVideos = async ({id, tags}) => {
  const limit = 5;
  const queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&limit=${limit}`
      : `&id_ne=${id}&limit=${limit}`;

  const responce = await axios.get(`/videos?${queryString}`);
  return responce.data;
};
