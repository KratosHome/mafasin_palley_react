import React, { useEffect, useState } from "react";
import ModalReview from "../../../components/modal/ModalReview/ModalReview";

import "./WriteReview.css";

const WriteReview = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [modal, setModal] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setEmail("");
    setName("");
  }
  return (
    <>
      <form className="WriteReviewContaineer" onSubmit={handleSubmit}>
        <div className="WriteReviewH5">Write A Review</div>
        <div>Name</div>
        <input
        required
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="NameReways"
          className="WriteReviewImput"
          placeholder="Name"
          type="text"
        />
        <div>Email</div>
        <input
        required
          name="EemailReways"
          className="WriteReviewImput"
          placeholder="Eemail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>Rating</div>
        <div>звездочки</div>
        <div>Body of Review (1500)</div>
        <input
          required
          name="Review"
          className="WriteReviewImput WriteReviewComent"
          placeholder="Write your coment here"
          type="text"
          maxLength="1500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="submit"
          value="Отправить"
          className="WriteReviewbutton"
          readOnly
          onClick={() => setModal(!modal)}
        />

      </form>
      {modal === true && email.length > 5 && name.length > 2 && message.length > 10 ? (
        <ModalReview text={"Rewuwer sent"} />
      ) : null}
    </>
  );
};

export default WriteReview;
