import React from 'react';
import TabsList from './TabsList';
const JobInfo = ({ dataState }) => {
	const TabsListData = dataState.map((item) => ({
		company: item.company,
		id: item.id,
	}));
	console.log(TabsListData);
	return (
		<section className='jobs-center'>
			<TabsList TabListData={TabsListData} />
		</section>
	);
};

export default JobInfo;
