/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { FormularyAddTour } from '../formulary/FormularyAddTour'
import { Box } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export function TourModal () {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <div>
      <Button onClick={handleOpen}>Add Tour</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <FormularyAddTour handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  )
}
