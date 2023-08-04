

import  { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
// import CreateEventModal from './CreateEventModal';
import CreateEventModal from './CreateEventModal';

Modal.setAppElement('#root'); // To avoid accessibility issues

const Header = () => {
  //modal logic starts here
  
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);
  const [createEventModalIsOpen, setCreateEventModalIsOpen] = useState(false);

  const openLoginModal = () => setLoginModalIsOpen(true);
  const closeLoginModal = () => setLoginModalIsOpen(false);

  const openSignupModal = () => setSignupModalIsOpen(true);
  const closeSignupModal = () => setSignupModalIsOpen(false);

  const openCreateEventModal = () => setCreateEventModalIsOpen(true);
  const closeCreateEventModal = () => setCreateEventModalIsOpen(false);
  
  //modal logic ends here

  return (
    //....................main content starts here...............................
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Event App</h1>
        <button onClick={openLoginModal}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button onClick={openSignupModal}>Sign Up</button>
        <button onClick={openCreateEventModal}>
          <FontAwesomeIcon icon={faPlus} /> Create Event
        </button>
      </div>

      <LoginModal isOpen={loginModalIsOpen} onClose={closeLoginModal} />
      <SignupModal isOpen={signupModalIsOpen} onClose={closeSignupModal} />
      <CreateEventModal
        isOpen={createEventModalIsOpen}
        onClose={closeCreateEventModal}
      />
    </nav>
    //....................main content end here...............................
  );
};

export default Header;
