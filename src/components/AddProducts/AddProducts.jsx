import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormLabel, Input, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddProducts({onAdd}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name,setName]=useState("")
  const [price,setPrice]=useState("")

  return (
    <div style={{marginTop:"20px"}}>
      <Button variant='outlined' onClick={handleOpen}>Add Products</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{width:"70%",margin:"auto"}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Products
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input value={name} onChange={(e)=>setName(e.target.value)} style={{ padding: "10px" }} placeholder="Product Name" />
              <br /><br />
              <input value={price} onChange={(e)=>setPrice(e.target.value)} style={{ padding: "10px" }} placeholder="Product Price" />
              <br /><br />
              <select
                style={{ padding: "10px" }}
                placeholder="Category"
                label="Category"
              >
                <option>Category</option>
                <option>Clothing</option>
                <option>Groceries</option>
                <option>Furniture</option>
                <option>Jwellery</option>
              </select>
              <br /><br />
              <Button variant="outlined" onClick={()=>{
                onAdd(name, price)
                handleClose()
              }}>Add</Button>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
