import React, { useEffect, useState } from 'react';
const url = 'https://course-api.com/react-tabs-project';
import Loading from './components/Loading';
import Error from './components/Error';
import JobInfo from './components/JobInfo';
const App = () => {
	const [dataState, setDataState] = useState(null);
	const [currentItemState, setCurrentItemState] = useState('recAGJfiU4CeaV0HL');
	const [errorState, setErrorState] = useState(null);
	const [isLoadingState, setIsLoadingState] = useState(true);
	const fetchData = async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Error has been occured ${response.message}`);
			}
			const fetchedData = await response.json();
			setDataState(fetchedData);
			setIsLoadingState(false);
		} catch (error) {
			setErrorState(error);
		}
	};
	useEffect(() => fetchData, []);
	useEffect(() => console.log(dataState), [dataState]);
	const setJobFunction = (jobId) => {
		setCurrentItemState(jobId);
	};
	if (errorState) return <Error />;
	if (isLoadingState)
		return (
			<section className='jobs-center'>
				<Loading />
			</section>
		);
	return (
		<section className='jobs-center'>
			<JobInfo
				jobsData={dataState}
				currentItem={currentItemState}
				setJobFunction={setJobFunction}
			/>
		</section>
	);
};

export default App;
