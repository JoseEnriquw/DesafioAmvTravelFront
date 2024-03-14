/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Box, Typography } from '@material-ui/core'
import { Grid, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import { AddBooking } from '../../services/BookingService'

export interface BookingProps {
  client: string
  bookingDate: string
  tourId: number
}

const initialValues: BookingProps = {
  client: '',
  bookingDate: '',
  tourId: 0
}

interface ModalClose {
  handleClose: () => void
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function FormularyAddBooking ({ handleClose }: ModalClose) {
  const formik = useFormik({
    initialValues: { ...initialValues },
    onSubmit: async (values) => {
      try {
        console.log('asd', { ...values })
        const bookingsData = await AddBooking({ ...values })
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
                                Add Booking
                            </Typography>
                        </Box>
                        <Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="client"
                                    name='client'
                                    label="Client"
                                    value={formik.values.client}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="startDate"
                                    name='startDate'
                                    label="StartDate"
                                    value={formik.values.bookingDate}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="price"
                                    name='price'
                                    label="Price"
                                    value={formik.values.tourId}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <Button type='submit' variant="contained">Create</Button>
                            </Box>

                        </Box>
                    </form>

                </Grid>

            </Box>
  )
}
