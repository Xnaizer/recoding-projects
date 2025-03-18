// src/components/utils/SearchModal.jsx

import PropTypes from 'prop-types';

function SearchModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Search</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <i className="ri-close-line text-2xl"></i>
                    </button>
                </div>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Search in AdoptPets..."
                />
                <button
                    className="mt-4 w-1/2 mx-auto flex justify-center bg-paleBlue text-white py-2 rounded-md bg-slate-700 hover:bg-slate-800 transition duration-300"
                    onClick={onClose}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

SearchModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SearchModal;
