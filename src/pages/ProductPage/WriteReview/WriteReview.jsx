import React, { useEffect, useState } from "react";
import ModalReview from "../../../components/UL/ModalReview/ModalReview";
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="NameReways"
          className="WriteReviewImput"
          placeholder="Name"
          type="text"
        />
        <div>Email</div>
        <input
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
          name="Review"
          className="WriteReviewImput WriteReviewComent"
          placeholder="Write your coment here"
          type="text"
          maxlength="1500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="submit"
          value="Отправить"
          className="WriteReviewbutton"
          onClick={() => setModal(!modal)}
        />
      </form>
      {modal === true ? <ModalReview /> : null}
    </>
  );
};

export default WriteReview;
