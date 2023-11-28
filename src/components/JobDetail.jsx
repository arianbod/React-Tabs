import React from 'react';

const JobDetail = ({ Title, Duties }) => {
	return (
		<article className='job-info'>
			<h3>Title</h3>
			<span className='job-company'>Tommy</span>
			<p className='job-date'>December 2015</p>
			{Duties.map((item) => {
				<div className='job-desc'>
					Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
					leggings offal cold-pressed brunch neutra. Hammock photo booth
					live-edge disrupt.
				</div>;
			})}
		</article>
	);
};

export default JobDetail;
