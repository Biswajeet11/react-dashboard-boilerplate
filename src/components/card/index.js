import React from 'react';
import {Card} from 'react-bootstrap'
export const CustomCard = () => {
	return (<Card className="mb-4">
		<Card.Body>
			Primary Card
		</Card.Body>
		<Card.Footer>
			View Details
		</Card.Footer>
	</Card>
	)
}