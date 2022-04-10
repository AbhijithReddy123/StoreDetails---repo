import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Storeedit from './Storeedit';
function ModalExampleCloseIcon(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button color="yellow">Update</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header  content='Edit Store Details' />
            <Modal.Content>
               <Storeedit />
            </Modal.Content>
           
        </Modal>
    )
}

export default ModalExampleCloseIcon