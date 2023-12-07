import React from 'react';
import JobDetail from './JobDetail';
const JobInfo = ({ dataState, SetjobIdFunction }) => {
	const TabsListData = dataState.map((item) => ({
		company: item.company,
		id: item.id,
	}));
	console.log(TabsListData);
	return (
		<div className='btn-container'>
			{TabsListData.map((item) => (
				<button
					className='job-btn active-btn'
					key={item.id}
					onClick={() => SetjobIdFunction()}>
					{item.company}
				</button>
			))}
		</div>
	);
};

export default JobInfo;
