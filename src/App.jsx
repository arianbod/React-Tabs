import { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tabs-project';

import TabsList from './components/TabsList';
import Loading from './components/Loading';
import JobInfo from './components/JobInfo';
const App = () => {
	const [isLoadingState, setIsLoadingState] = useState(true);
	const [dataState, setDataState] = useState(null);
	const [errorState, setErrorState] = useState(null);
	const getData = async () => {
		setIsLoadingState(true);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Data Fetched failed');
			}
			const fetchedData = await response.json();
			setDataState(fetchedData);
			setIsLoadingState(false);
		} catch (error) {
			setErrorState(error);
			console.error(error);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	useEffect(() => {}, [dataState]);
	return (
		<main>
			{isLoadingState && <Loading />}
			{dataState && <JobInfo dataState={dataState} />}
			{errorState && <div> Error Loading data: {errorState.message}</div>}
		</main>
	);
};
export default App;
