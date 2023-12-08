import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 300,
  backgroundColor: "#fff",
  border: '1px solid #000',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        style={{width: '100%', height: '100%'}}
      >
        <Box sx={style}>
          <Typography variant="h3" component="h2" align="center" padding='50px' color='#72D194' fontWeight="bold">
            Hoàn thành
          </Typography>
          <Button variant="contained" color="success" style={{width: '75px'}} onClick={() => handleClose()}>Đóng</Button>
        </Box>
      </Modal>
    </div>
  );
}