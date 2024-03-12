import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { type Tour } from '../../types/Tour'

interface TourTableProps {
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TourTable
