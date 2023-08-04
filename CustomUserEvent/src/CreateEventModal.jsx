/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root');  // To avoid accessibility issues

//.................create event modal start here................
const CreateEventModal = ({ isOpen, onClose }) => {
  const [eventDate, setEventDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    setEventDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your event creation logic goes here
    onClose();
  };
  //.................create event modal end here................

  return (
    // ................main content starts here.................
    <Modal
    isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header flex items-center justify-between p-4 bg-blue-500 text-white">
        <h2 className="text-xl font-bold">Create Event</h2>
        <button onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="modal-content p-4">
        <form className="space-y-4">
          <div>
            <label htmlFor="eventName" className="block font-bold">
              Event Name:
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="eventDate" className="block font-bold">
              Event Date:
            </label>
            <DatePicker
              id="eventDate"
              name="eventDate"
              selected={eventDate}
              onChange={handleDateChange}
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="eventImage" className="block font-bold">
              Event Image:
            </label>
            <input
              type="file"
              id="eventImage"
              name="eventImage"
              accept="image/*"
              className="block w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"value={handleSubmit}
            >
              Create
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
  // ....................main content ends here......................
  );
};

export default CreateEventModal;
