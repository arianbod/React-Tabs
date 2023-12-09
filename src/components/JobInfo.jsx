import React from 'react';
import Duties from './Duties';
import BtnContainer from './BtnContainer';
const JobInfo = ({ jobsData, currentItem, setJobFunction }) => {
	const selectedJobData = jobsData.find((item) => currentItem === item.id);
	console.log(selectedJobData);
	return (
		<>
			<BtnContainer
				jobsData={jobsData}
				setJobFunction={setJobFunction}
				currentItem={currentItem}
			/>
			<article className='job-info'>
				<h3>{selectedJobData.title}</h3>
				<span className='job-company'>{selectedJobData.company}</span>
				<p className='job-date'>{selectedJobData.dates}</p>
				<Duties duties={selectedJobData.duties} />
			</article>
		</>
	);
};

export default JobInfo;
