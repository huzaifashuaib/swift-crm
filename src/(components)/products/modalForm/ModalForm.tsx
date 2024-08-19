"use client";

// Define the type for props
interface ModalFormProps {
  isOpen: boolean;
  toggleModal: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, toggleModal, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      id="crud-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow border-2 border-btnColor">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b-2 rounded-t border-btnColor">
            <h3 className="text-lg font-bold text-btnColor">
              {title}
            </h3>
            <button
              type="button"
              onClick={toggleModal}
              className="text-btnColor border border-btnColor bg-transparent hover:bg-btnColor hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 md:p-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
