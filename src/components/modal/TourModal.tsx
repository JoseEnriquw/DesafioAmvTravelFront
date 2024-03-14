/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { FormularyAddTour } from '../formulary/FormularyAddTour'
import { Box, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { FormularyUpdateTour } from '../formulary/FormularyUpdateTour'
import { type Tour } from '../../types/Tour'

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

export function TourModal (tour?: Tour) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <div>
      {tour !== undefined && tour.id > 0
        ? (
             <IconButton aria-label="delete" color="primary" onClick={handleOpen}>
                <EditIcon />
             </IconButton>
          )
        : (

          <Button onClick={handleOpen}>Add Tour</Button>
          )
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {tour !== undefined && tour.id > 0
          ? (
          <Box sx={style}>
              {
                  FormularyUpdateTour({ ...tour }, { handleClose })
              }
          </Box>
            )
          : (
          <Box sx={style}>
              <FormularyAddTour handleClose={handleClose}/>
          </Box>
            )
        }
      </Modal>
    </div>
  )
}
