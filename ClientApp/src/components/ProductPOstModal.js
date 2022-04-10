import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Productpost from './Productpost';
function ModalExampleCloseIcon(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button primary>Create Product</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header content='Product Details' />
            <Modal.Content>
               <Productpost /> 
            </Modal.Content>
        
        </Modal>
    )
}

export default ModalExampleCloseIcon