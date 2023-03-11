import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/RelatedVideo/RelatedVideoSlice";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({id, tags}) {

    const dispatch = useDispatch();
    const {relatedVideo, isLoading, isError, error} = useSelector(state => state.relatedVideo);

    useEffect(() =>{
        dispatch(fetchRelatedVideo({id, tags}))
    },[dispatch, id, tags])


    // decide what to render
    let content = null;
    if (isLoading) content = <Loading />;

    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && relatedVideo?.length === 0) {
        content = <div className="col-span-12">No video found!</div>;
    }

    if (!isLoading && !isError && relatedVideo?.length > 0) {
        content = relatedVideo.map((video) => (
            <RelatedVideoListItem key={video.id} video={video} />
        ));
    }


    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
