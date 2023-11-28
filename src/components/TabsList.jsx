import React from 'react';

const TabsList = ({ TabListData }) => {
	return (
		<div className='btn-container'>
			{TabListData.map((item) => (
				<button
					className='job-btn active-btn'
					key={item.id}
					onClick={''}>
					{item.company}
				</button>
			))}
		</div>
	);
};

export default TabsList;
