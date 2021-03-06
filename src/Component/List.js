import React from 'react'
import  Modal  from '@material-ui/core/Modal';
import ClearIcon from '@material-ui/icons/Clear'; 
import Card from '@material-ui/core/Card';
 
import CardContent from '@material-ui/core/CardContent'; 

import './About.css';
const List = (list) => {
    const [open, setOpen] =React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
        <Modal
open={open}
onClose={handleClose}
className="model"
aria-labelledby="simple-modal-title"
aria-describedby="simple-modal-description"
>
<div className="Imageprev">        
<img src={ list.url} className="child_img" onClick={handleClose} alt={ list.url}/>
<button className="btn"onClick={handleClose}><ClearIcon style={{color:'white', fontSize:'30px'}}/></button>
</div>




</Modal>

<div className="card_img">
  <Card className='Card1'>
    <CardContent>
    <img src={list.url}    className="card-img-top" alt={list.url} onClick={handleOpen}/>
    </CardContent>
  </Card>
 
</div>
</>
    )
}

export default List
