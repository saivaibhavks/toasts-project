import { useEffect, useState } from "react";
import "./Toasts.css";

const Toasts = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (type) => {
    const id = new Date().getTime();
    const newToast = { id, type };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <div className="toast-container">
        {toasts.map((item) => (
          <div key={item.id} className={`toast ${item.type}`}>
            {item.type} Toast
            <div onClick={() => removeToast(item.id)} className="cross">
              X
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <button onClick={() => addToast("success")}>Success</button>
        <button onClick={() => addToast("info")}>Info</button>
        <button onClick={() => addToast("warning")}>Warning</button>
        <button onClick={() => addToast("error")}>Error</button>
      </div>
    </>
  );
};

export default Toasts;
