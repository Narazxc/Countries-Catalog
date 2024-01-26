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
        className="custom-blur fixed inset-0 bg-black/60"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="max-w-lg rounded-lg bg-orange-100 pb-5 pl-10 pr-10 pt-4">
          {children}

          <div className="flex justify-end">
            <button
              className="cursor-pointer rounded-md pl-2 pr-2 hover:bg-red-300"
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
