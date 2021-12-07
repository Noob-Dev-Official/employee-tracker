import React, { useState } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { v4 as uuidV4 } from 'uuid';

import { addTimesheetTableRowCount } from '../redux/ducks/Timesheet';
import { addTimesheet } from '../redux/ducks/TimesheetRow';
import DemoTimesheetTableRow from './DemoTimesheetTableRow';
import { Table, TableHead, TableBody } from './DemoTableComponents';
import { SmallTableButton } from './global/ExportedStylings';

const TimesheetTableParentDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-top: 10px;
	background-color: #fff;
`;

const DemoTimesheetTable = () => {
	// const [numberOfRows, setNumberOfRows] = useState(0);
	const [timesheetTableRowIndex, setTimesheetTableRowIndex] = useState(-1);

	const numberOfRows = useSelector(
		(state) => state.timesheet.timesheet_table_row_count.num,
	);

	const timesheetTableRowData = useSelector(
		(state) => state.timesheetRow.timesheet_row,
	);

	const dispatch = useDispatch();

	const onAddButtonClick = () => {
		// setNumberOfRows((prev) => prev + 1);
		// dispatch(addTimesheetTableRowCount());

		dispatch(addTimesheet(uuidV4(), 0, 0, 0, 0, 0, 0, 324324));
	};

	// const timesheetTableRowComp = (props) => {
	// 	setTimesheetTableRowIndex((prev) => prev + 1);

	// 	return <DemoTimesheetTableRow index={timesheetTableRowIndex} key={props.key} />;
	// };

	return (
		<>
			<TimesheetTableParentDiv>
				<Table>
					<TableHead padding='10px'>
						<tr>
							<th>Day</th>
							<th>Month</th>
							<th>Rate</th>
							<th>Hour</th>
							<th>Total</th>
						</tr>
					</TableHead>
					<TableBody>
						{/* {timesheetTableRowData.map((data) => {
							return (
								<DemoTimesheetTableRow
									index={timesheetTableRowIndex}
									key={data.id}
								/>
							);
							// return timesheetTableRowComp({key: data.id});
						})}
						{Array.from(Array(numberOfRows), () => {
							return <DemoTimesheetTableRow key={123} />;
							// return timesheetTableRowComp({key: 123});
						})} */}
						{timesheetTableRowData.map((data, index) => {
							return (
								<DemoTimesheetTableRow key={data.id} index={index} />
							);
						})}
					</TableBody>
				</Table>
				<div className='buttons'>
					<SmallTableButton
						className='add-row'
						onClick={onAddButtonClick}
						backgroundColor='#0f4c75'
						color='#fff'
						marginLeft='20px'
						marginTop='15px'
						marginBottom='10px'
					>
						Add
					</SmallTableButton>
					{/* <SmallTableButton
						className='update'
						backgroundColor='#fff'
						// color='#fff'
						marginLeft='10px'
						marginTop='15px'
						marginBottom='10px'
					>
						Update
					</SmallTableButton> */}
				</div>
			</TimesheetTableParentDiv>
		</>
	);
};

export default DemoTimesheetTable;
