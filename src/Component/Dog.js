import React    from 'react'
import  './Dog.css'
import Modal from '@material-ui/core/Modal';
import ClearIcon from '@material-ui/icons/Clear';

const Dog = (props) => {
     
    const [open, setOpen] =React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="child">
            <Modal
        open={open}
        onClose={handleClose}
        className="model"
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="Imageprev">        
        <img src={props.url} className="child_img" onClick={handleClose} alt={props.url}/>
        <button className="btn"onClick={handleClose}><ClearIcon style={{color:'white', fontSize:'30px'}}/></button>
</div>
    
     
    
        
      </Modal>
              <img className="small_img" style={{width:300,height:300}} src={props.url} onClick={handleOpen} alt={props.url}/>  
           
        </div>
    )
}

export default Dog
