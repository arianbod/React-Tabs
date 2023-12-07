import { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tabs-project';

import Loading from './components/Loading';
import JobInfo from './components/JobInfo';
import JobDetail from './components/JobDetail';
const App = () => {
	const [isLoadingState, setIsLoadingState] = useState(true);
	const [dataState, setDataState] = useState(null);
	const [errorState, setErrorState] = useState(null);
	const [jobIdState, setJobIdState] = useState('recAGJfiU4CeaV0HL');
	const SetjobIdFunction = (x) => {
		setJobIdState(x);
	};
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
	useEffect(() => {
		{
			if (dataState) {
				const FilteredData = dataState.filter((job) => job.id === jobIdState);
				console.log('data equal to ', FilteredData[0]);
			}
		}
	}, [dataState]);
	return (
		<main>
			{isLoadingState && <Loading />}
			{!isLoadingState && dataState && (
				<section className='jobs-center'>
					<JobInfo
						dataState={dataState}
						SetjobIdFunction={SetjobIdFunction}
					/>
					<JobDetail data={dataState.filter((job) => job.id == jobIdState)} />
				</section>
			)}
			{errorState && <div> Error Loading data: {errorState.message}</div>}
		</main>
	);
};
export default App;
