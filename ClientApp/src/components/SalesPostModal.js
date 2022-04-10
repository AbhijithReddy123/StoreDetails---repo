import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Salespost from './Salespost';
function ModalExampleCloseIcon(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button primary>Create Sales</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header content='Sales Details' />
            <Modal.Content>
                <Salespost />
            </Modal.Content>
      
        </Modal>
    )
}

export default ModalExampleCloseIcon