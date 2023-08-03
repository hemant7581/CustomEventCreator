/* eslint-disable react/prop-types */

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const SignupModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header flex items-center justify-between p-4 bg-blue-500 text-white">
        <h2 className="text-xl font-bold">Sign Up</h2>
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="modal-content p-4">
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-bold">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-bold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignupModal;
