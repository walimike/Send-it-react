import React from 'react';
import Modal from 'react-responsive-modal';
import SignupForm from './SignupForm';

const SignUpModal = props => {
  return (
    <div className="modal ">
      <Modal open={props.open} onClose={props.close}>
        <SignupForm
          userSignupRequest={props.userSignupRequest}
          onChange={props.inputHandler}
          onSubmit={props.submitHandler}
          password={props.password}
          email={props.email}
          username={props.username}
          isLoading={props.isLoading}
        />
      </Modal>
    </div>
  );
};

export default SignUpModal;