/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Box, Typography } from '@material-ui/core'
import { Grid, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import { UpdateBooking } from '../../services/BookingService'
import { type Booking } from '../../types/Booking'

interface ModalClose {
  handleClose: () => void
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function FormularyUpdateBooking (data: Booking, { handleClose }: ModalClose) {
  const formik = useFormik({
    initialValues: { ...data },
    onSubmit: async (values) => {
      try {
        console.log('asd', { ...values })
        const bookingsData = await UpdateBooking(values.id, { ...values })
        console.log(bookingsData)
        handleClose()
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
            <Box style={{ justifyItems: 'center' }}>
                <Grid>

                    <form onSubmit={formik.handleSubmit}>
                        <Box>
                            <Typography variant='h3' style={{ color: '#02a7e1' }}>
                                Update Booking
                            </Typography>
                        </Box>
                        <Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="id"
                                    name='id'
                                    label="Id"
                                    value={formik.values.id}
                                    disabled
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="client"
                                    name='client'
                                    label="client"
                                    value={formik.values.client}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="bookingDate"
                                    name='bookingDate'
                                    label="bookingDate"
                                    value={formik.values.bookingDate}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="tourId"
                                    name='tourId'
                                    label="tourId"
                                    value={formik.values.tourId}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <Button type='submit' variant="contained">Update</Button>
                            </Box>

                        </Box>
                    </form>

                </Grid>

            </Box>
  )
}
