import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/actions/uiContextActions';
import OfferDetails from '../OfferDetails';
import OfferBook from '../OfferBook';

let MODAL_TYPES = 
{
  'OfferDetails': OfferDetails,
  'OfferBook':OfferBook,
}

const ModalWindow = (props) => {

  if(props.modal.component==null)
  return null;

  let SpecifiedModal = MODAL_TYPES[props.modal.component];

  return(

    <Modal size="lg"  show centered  onHide={() => props.closeModal()}>
      <SpecifiedModal  {...props.modal.params}/>
    </Modal>
  );
}

const mapStateToProps = state => ({modal: state.uiContext,});
const mapDispatchTopProps = {closeModal,}
  
export default connect(mapStateToProps, mapDispatchTopProps)(ModalWindow);
