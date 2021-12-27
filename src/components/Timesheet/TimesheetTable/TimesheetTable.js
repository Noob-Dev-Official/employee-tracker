import React from 'react';

import styled from 'styled-components';

import {
	Table,
	TableHead,
	TableBody,
} from '../../Utilities/TimesheetTableUtils';
import TimesheetTableRow from '../TimesheetTableRow/TimesheetTableRow';

const TimesheetTableParent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 5px;

	form {
		display: flex;
	}
`;

const TimesheetTable = () => {
	return (
		<>
			<TimesheetTableParent>
				<form>
					<Table
						borderLeft='3px solid #3282b8'
						borderTop='3px solid #3282b8'
						backgroundColor='#bbe1fa'
						width='50%'
					>
						<TableHead
							borderBottom='3px solid #3282b8'
							borderRight='1px solid #3282b8'
							padding='30px'
						>
							<tr>
								<th>Date</th>
								<th>Hour</th>
								<th>Rate</th>
								<th className='no-right-border'>Total</th>
							</tr>
						</TableHead>
						<TableBody>
							<TimesheetTableRow day={1} />
							<TimesheetTableRow day={2} />
							<TimesheetTableRow day={3} />
							<TimesheetTableRow day={4} />
							<TimesheetTableRow day={5} />
							<TimesheetTableRow day={6} />
							<TimesheetTableRow day={7} />
							<TimesheetTableRow day={8} />
							<TimesheetTableRow day={9} />
							<TimesheetTableRow day={10} />
							<TimesheetTableRow day={11} />
							<TimesheetTableRow day={12} />
							<TimesheetTableRow day={13} />
							<TimesheetTableRow day={14} />
							<TimesheetTableRow day={15} />
						</TableBody>
					</Table>
					<Table
						borderLeft='3px solid #3282b8'
						borderRight='3px solid #3282b8'
						borderTop='3px solid #3282b8'
						backgroundColor='#bbe1fa'
						width='50%'
					>
						<TableHead
							borderBottom='3px solid #3282b8'
							borderRight='1px solid #3282b8'
							padding='30px'
						>
							<tr>
								<th>Date</th>
								<th>Hour</th>
								<th>Rate</th>
								<th className='no-right-border'>Total</th>
							</tr>
						</TableHead>
						<TableBody>
							<TimesheetTableRow day={16} />
							<TimesheetTableRow day={17} />
							<TimesheetTableRow day={18} />
							<TimesheetTableRow day={19} />
							<TimesheetTableRow day={20} />
							<TimesheetTableRow day={21} />
							<TimesheetTableRow day={22} />
							<TimesheetTableRow day={23} />
							<TimesheetTableRow day={24} />
							<TimesheetTableRow day={25} />
							<TimesheetTableRow day={26} />
							<TimesheetTableRow day={27} />
							<TimesheetTableRow day={28} />
							<TimesheetTableRow day={29} />
							<TimesheetTableRow day={30} />
							<TimesheetTableRow day={31} />
						</TableBody>
					</Table>
				</form>
			</TimesheetTableParent>
		</>
	);
};

export default TimesheetTable;
