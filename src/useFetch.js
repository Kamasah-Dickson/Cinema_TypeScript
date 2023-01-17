import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "b7d4fc779ea5fc8fa713ece60b5a4033";

const useFetch = (yourData) => {
	const [movies, setMovies] = useState([]);
	const [pending, setPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(yourData, {
					params: {
						api_key: apiKey,
						language: "en_US",
						page: 1,
					},
				});
				setMovies(data);
				setPending(false);
			} catch (error) {
				setPending(true);
				console.log(error.message);
				setError(error.message);
			}
		};
		fetchData();
	}, [yourData]);
	return { movies, error, pending };
};
export default useFetch;
