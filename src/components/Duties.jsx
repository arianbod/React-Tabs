import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
	return duties.map((item) => {
		const id = uuidv4();
		console.log(id);
		return (
			<div
				className='job-desc'
				key={id}>
				<FaAngleDoubleRight />
				<p>{item}</p>
			</div>
		);
	});
};

export default Duties;
