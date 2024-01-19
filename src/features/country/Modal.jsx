import { Dialog } from "@headlessui/react";

export function Modal({ children, onOpenModal, isOpenModal }) {
  return (
    <Dialog
      open={isOpenModal}
      onClose={() => onOpenModal(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/60 custom-blur"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="max-w-lg rounded-lg bg-orange-100 pl-10 pt-4 pr-10 pb-5">
          {children}

          <div className="flex justify-end">
            <button
              className="hover:bg-red-300 rounded-md cursor-pointer pl-2 pr-2"
              onClick={() => onOpenModal(false)}
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
