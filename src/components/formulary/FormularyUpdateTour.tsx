/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Box, Typography } from '@material-ui/core'
import { Grid, TextField, Button } from '@mui/material'
import { useFormik } from 'formik'
import { UpdateTour } from '../../services/TourService'
import { type Tour } from '../../types/Tour'

interface ModalClose {
  handleClose: () => void
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function FormularyUpdateTour (data: Tour, { handleClose }: ModalClose) {
  const formik = useFormik({
    initialValues: { ...data },
    onSubmit: async (values) => {
      try {
        console.log('asd', { ...values })
        const toursData = await UpdateTour(values.id, { ...values })
        console.log(toursData)
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
                                Update Tour
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
                                    id="name"
                                    name='name'
                                    label="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id='destiny'
                                    name='destiny'
                                    label="Destiny"
                                    value={formik.values.destiny}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="startDate"
                                    name='startDate'
                                    label="StartDate"
                                    value={formik.values.startDate}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="endDate"
                                    name='endDate'
                                    label="EndDate"
                                    value={formik.values.endDate}
                                    onChange={formik.handleChange}
                                    />
                            </Box>
                            <Box style={{ marginTop: '5%' }}>
                                <TextField
                                    required
                                    id="price"
                                    name='price'
                                    label="Price"
                                    value={formik.values.price}
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
