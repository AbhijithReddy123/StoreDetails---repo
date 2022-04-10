import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Editproduct from './Editproduct';
function ModalExampleCloseIcon(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button color="yellow">update</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header  content='Edit Product' />
            <Modal.Content>
                <Editproduct />
            </Modal.Content>

        </Modal>
    )
}

export default ModalExampleCloseIcon