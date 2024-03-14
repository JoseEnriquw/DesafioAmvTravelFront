/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { type Tour } from '../../types/Tour'
import { TourModal } from '../modal/TourModal'

export interface TourTableProps {
  tours: Tour[]
}

const TourTable: React.FC<TourTableProps> = ({ tours }) => {
  return (
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Destiny</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tours.map((tour) => (
              <TableRow key={tour.id}>
                <TableCell>{tour.id}</TableCell>
                <TableCell>{tour.name}</TableCell>
                <TableCell>{tour.destiny}</TableCell>
                <TableCell>{tour.startDate}</TableCell>
                <TableCell>{tour.endDate}</TableCell>
                <TableCell>${tour.price}</TableCell>
                <TableCell>
                  <TourModal {...tour}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TourTable
