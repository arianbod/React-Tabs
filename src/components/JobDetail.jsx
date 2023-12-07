import React from 'react';
import { FaForward } from 'react-icons/fa6';

const JobDetail = ({ data }) => {
	return (
		<article className='job-info'>
			<h3>{}</h3>
			<span className='job-company'>{data[0].title}</span>
			<p className='job-date'>December 2015</p>
			{/* {duties.map((item) => { */}
			<div className='job-desc'>
				<FaForward className='job-icon' />
				<p>
					Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
					leggings offal cold-pressed brunch neutra. Hammock photo booth
					live-edge disrupt.
				</p>
			</div>
			{/* })} */}
		</article>
	);
};

export default JobDetail;
