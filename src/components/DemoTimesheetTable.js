import React from 'react';

import styled from 'styled-components';

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
						<tr>
							<td>
								<select name='day' id='day-select'>
									<option value='01'>01</option>
									<option value='02'>02</option>
								</select>
							</td>
							<td>
								<select name='month' id='month-select'>
									<option value='01'>01</option>
									<option value='02'>02</option>
								</select>
							</td>
							<td>
								<input type='number' name='rate' id='rate' />
							</td>
							<td>
								<input type='number' name='hour' id='hour' />
							</td>
							<td>
								<input type='number' name='total' id='total' />
							</td>
						</tr>
						<tr>
							<td>
								<select name='day' id='day-select'>
									<option value='01'>01</option>
									<option value='02'>02</option>
								</select>
							</td>
							<td>
								<select name='month' id='month-select'>
									<option value='01'>01</option>
									<option value='02'>02</option>
								</select>
							</td>
							<td>
								<input type='number' name='rate' id='rate' />
							</td>
							<td>
								<input type='number' name='hour' id='hour' />
							</td>
							<td>
								<input type='number' name='total' id='total' />
							</td>
						</tr>
					</TableBody>
				</Table>
			</TimesheetTableParentDiv>
		</>
	);
};

export default DemoTimesheetTable;
