import React from 'react';

import styled from 'styled-components';

const TimesheetTableParent = styled.div`
	display: flex;

	form {
		display: flex;

		table {
			border-left: 3px solid #3282b8;
			border-top: 3px solid #3282b8;
			background-color: #bbe1fa;

			thead {
				tr {
					th {
						border-bottom: 3px solid #3282b8;
						border-right: 1px solid #3282b8;
						padding: 30px;
					}
				}

				tr .total {
					border-right: 0px;
				}
			}

			tbody {
				tr {
					td {
						border-bottom: 1px solid #3282b8;
						border-right: 1px solid #3282b8;
						text-align: center;

						input {
							background-color: #bbe1fa;
							border: 0;
							max-width: 90px;
							padding: 30px 0;
							text-align: center;
						}
					}
				}

				tr .total-value {
					border-right: 0px;
				}
			}
		}

		.table-right {
			border-right: 3px solid #3282b8;
		}
	}
`;

const TimesheetTable = () => {
	return (
		<>
			<TimesheetTableParent>
				<form>
					<table className='table-left'>
						<thead>
							<tr>
								<th>Date</th>
								<th>Hour</th>
								<th>Rate</th>
								<th className='total'>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>2</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>3</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>4</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>5</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>6</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>7</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>8</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>9</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>10</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
						</tbody>
					</table>
					<table className='table-centre'>
						<thead>
							<tr>
								<th>Date</th>
								<th>Hour</th>
								<th>Rate</th>
								<th className='total'>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>11</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>12</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>13</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>14</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>15</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>16</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>17</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>18</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>19</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>20</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
						</tbody>
					</table>
					<table className='table-right'>
						<thead>
							<tr>
								<th>Date</th>
								<th>Hour</th>
								<th>Rate</th>
								<th className='total'>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>21</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>22</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>23</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>24</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>25</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>26</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>27</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>28</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>29</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
							<tr>
								<td>30</td>
								<td>
									<input type='number' name='hour' />
								</td>
								<td>
									<input type='number' name='rate' />
								</td>
								<td className='total-value'>133</td>
							</tr>
						</tbody>
					</table>
				</form>
			</TimesheetTableParent>
		</>
	);
};

export default TimesheetTable;
