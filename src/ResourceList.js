import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
	const resources = useResources(resource);

	return (
		<div>
			{resources.map(record => {
				return (
					<ul>
						<li key={record.id}>{record.title}</li>
					</ul>
				);
			})}
		</div>
	);
};

export default ResourceList;
