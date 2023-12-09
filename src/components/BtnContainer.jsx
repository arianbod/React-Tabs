import React from 'react';

const BtnContainer = ({ jobsData, setJobFunction, currentItem }) => {
	return (
		<section className='btn-container'>
			{jobsData.map((item) => (
				<button
					onClick={() => setJobFunction(item.id)}
					className={currentItem === item.id ? 'job-btn active-btn' : 'job-btn'}
					key={item.id}>
					{item.company}
				</button>
			))}
		</section>
	);
};

export default BtnContainer;
