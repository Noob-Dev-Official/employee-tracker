import React from 'react';

import styled from 'styled-components';

import DemoTimesheetTableRow from './DemoTimesheetTableRow';
import { Table, TableHead, TableBody } from './DemoTableComponents';

const TimesheetTableParentDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-top: 10px;
`;

const DemoTimesheetTable = () => {
	return (
		<>
			<TimesheetTableParentDiv>
				<Table>
					<TableHead>
						<tr>
							<th>Day</th>
							<th>Month</th>
							<th>Rate</th>
							<th>Hour</th>
							<th>Total</th>
						</tr>
					</TableHead>
					<TableBody>
						<DemoTimesheetTableRow />
					</TableBody>
				</Table>
			</TimesheetTableParentDiv>
		</>
	);
};

export default DemoTimesheetTable;
