import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import { type Booking } from '../../types/Booking'
import { BookingModal } from '../modal/BookingModal'

interface BookingTableProps {
  bookings: Booking[]
}

const BookingTable: React.FC<BookingTableProps> = ({ bookings }) => {
  return (
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Booking Date</TableCell>
              <TableCell>Tour ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.client}</TableCell>
                <TableCell>{booking.bookingDate}</TableCell>
                <TableCell>${booking.tourId}</TableCell>
                <TableCell>
                  <BookingModal {...booking}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default BookingTable
