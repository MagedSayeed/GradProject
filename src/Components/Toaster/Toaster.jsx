import { Bounce, ToastContainer } from "react-toastify";

export default function Toaster() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="light"
      transition={Bounce}
    />
  );
}
