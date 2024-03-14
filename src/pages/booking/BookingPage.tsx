import React, { useEffect, useState } from 'react'
import { type Booking } from '../../types/Booking'
import BookingTable from '../../components/table/TableBooking'
import { fetchBookings } from '../../services/BookingService'
import { Box } from '@material-ui/core'
import { BookingModal } from '../../components/modal/BookingModal'

const BookingPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([])
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const bookingsData = await fetchBookings()
        setBookings(bookingsData)
      } catch (error) {
        console.log(error)
      }
    }

    void fetchData()
  }, [])
  return (
    <Box style={{ width: '1920px', height: '1080px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%' }}>
      <Box style={{ width: '600px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <h1>Booking Table</h1>
        </Box>
        <Box style={{ marginBottom: '-20px' }}>
          <BookingModal id={0} client={''} bookingDate={''} tourId={0}/>
        </Box>
      </Box>

    {bookings.length > 0
      ? (
      <Box >
        <BookingTable bookings={bookings} />
      </Box>
        )
      : (
      <p>Loading bookings...</p>
        )}
  </Box>
  )
}

export default BookingPage
