import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import '@/assets/styles/style.css'
import { AppBar, makeStyles } from '@mui/material'


const useStyles = makeStyles({
  root: {
   borderRadius: '22px'
  }
});

function BasicModal( ) {
  const classes = useStyles
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  
    


  return (
    <AppBar className={classes}>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Text in a modal
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </AppBar>
  )
}

export default BasicModal
