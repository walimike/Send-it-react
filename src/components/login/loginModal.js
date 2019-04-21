
import React from 'react';
import Modal from 'react-responsive-modal';

 import 'materialize-css/dist/css/materialize.min.css';

 import LoginForm from "../../components/login/loginForm";

 const LoginModal = (props) => {
     const {open,
            close,
            name,
            password,
            nameChange,
            passwordChange,
            handleSubmit,
            isLoading} = props;

   return (
    <div className="modal ">
        <Modal open={open} onClose={close}>
            <LoginForm 
            name={name}
            password={password}
            nameChange = {nameChange}
            passwordChange = {passwordChange}
            handleSubmit = {handleSubmit}
            isLoading = {isLoading}
            />
        </Modal>
  </div>

   )
}

 export default LoginModal;