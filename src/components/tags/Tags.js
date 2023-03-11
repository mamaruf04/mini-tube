import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/Tags/TagSlice";
import Tag from "./Tag";

export default function Tags() {
  const dispatch = useDispatch();
  const {videos} = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return videos?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {videos.map(tag => <Tag key={tag.id} title={tag.title} />)}
      </div>
    </section>
  ) : null;
}
