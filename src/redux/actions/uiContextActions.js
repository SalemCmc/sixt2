import { SHOW_MODAL, CLOSE_MODAL} from './types';

export const showModal = (component, params) => (dispatch) =>
{
    dispatch({
        type: SHOW_MODAL,
        component:component,
        params:params
    })
}
export const closeModal = () => (dispatch) => 
{
    dispatch({type: CLOSE_MODAL,})
}
