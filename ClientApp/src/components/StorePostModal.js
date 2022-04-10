import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Storepost from './Storepost';
function ModalExampleCloseIcon(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button primary>Create Store </Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header  content='Store Details' />
            <Modal.Content>
                <Storepost />
            </Modal.Content>
          
        </Modal>
    )
}

export default ModalExampleCloseIcon