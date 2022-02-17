import React, { useEffect, useState } from "react";
import "./ModalReview.css";

const ModalReview = () => {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setModal(false);
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);
  if (!modal) {
    return null;
  }

  return (
    <div className="ModalReview">
      <div>Review sent</div>
    </div>
  );
};

export default ModalReview;
