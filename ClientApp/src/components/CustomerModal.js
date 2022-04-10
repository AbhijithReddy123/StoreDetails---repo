import React, {useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import CustomerPost from "./CustomerPost";
function ModalExampleCloseIcon(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button color="primary">Create Customer</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header  content='Customer Details' />
            <Modal.Content>
                <CustomerPost />
                
            </Modal.Content>

        </Modal>
    )
}

export default ModalExampleCloseIcon