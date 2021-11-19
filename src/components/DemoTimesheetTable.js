import React from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { addTimesheetTableRowCount } from '../redux/ducks/Timesheet';
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

   const numberOfRows = useSelector(
      (state) => state.timesheet.timesheet_table_row_count.num
   );

   const dispatch = useDispatch();

   const onAddButtonClick = () => {
      // setNumberOfRows((prev) => prev + 1);
      dispatch(addTimesheetTableRowCount());
   };

   console.log(numberOfRows);

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
                  {/* <DemoTimesheetTableRow TimesheetTableId={123} />
                  <DemoTimesheetTableRow TimesheetTableId={123} /> */}
                  {Array.from(Array(numberOfRows), () => {
                     return <DemoTimesheetTableRow TimesheetTableId={123} />;
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
               <SmallTableButton
                  className='update'
                  backgroundColor='#fff'
                  // color='#fff'
                  marginLeft='10px'
                  marginTop='15px'
                  marginBottom='10px'
               >
                  Update
               </SmallTableButton>
            </div>
         </TimesheetTableParentDiv>
      </>
   );
};

export default DemoTimesheetTable;
