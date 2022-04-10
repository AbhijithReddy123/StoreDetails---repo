import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import CustomerEdit from './CustomerEdit';
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
            <Header  content='Edit Customer' />
            <Modal.Content>
           <CustomerEdit />
            </Modal.Content>

        </Modal>
    )
}

export default ModalExampleCloseIcon