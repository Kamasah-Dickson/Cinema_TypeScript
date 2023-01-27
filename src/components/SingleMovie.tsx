import { useParams } from "react-router-dom";

function SingleMovie() {
	const { id }: any = useParams();
	return <div>SingleMovie{id}</div>;
}

export default SingleMovie;
