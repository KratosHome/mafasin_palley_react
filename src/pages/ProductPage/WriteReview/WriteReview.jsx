import React from "react";
import ModalReview from "../../../components/modal/ModalReview/ModalReview";

import "./WriteReview.css";

const WriteReview = ({sentReview, setPost, post}) => {

  const [modal] = React.useState(false);

  return (
    <>
      <form className="WriteReviewContaineer" >
        <div className="WriteReviewH5">Write A Review</div>
        <div>Name</div>
        <input
        required
          value={post.name}
          name="NameReways"
          className="WriteReviewImput"
          placeholder="Name"
          type="text"
          onChange={(e) => setPost({...post, name: e.target.value})}
        />
        <div>Email</div>
        <input
        required
        value={post.email}
          name="EemailReways"
          className="WriteReviewImput"
          placeholder="Eemail"
          type="email"
          onChange={(e) => setPost({...post, email: e.target.value})}
        />
        <div>Rating</div>
        <div>звездочки</div>
        <div>Body of Review (1500)</div>
        <input
          required
          value={post.text}
          name="Review"
          className="WriteReviewImput WriteReviewComent"
          placeholder="Write your coment here"
          type="text"
          maxLength="1500"
          onChange={(e) => setPost({...post, text: e.target.value})}
        />
        <input
          type="submit"
          value="Отправить"
          className="WriteReviewbutton"
          readOnly
          onClick={sentReview}
        />
      </form>
      {modal === true && post.email.length > 5 && post.name.length > 2 && post.text.length > 10 ? (
        <ModalReview text={"Rewuwer sent"} />
      ) : null}
    </>
  );
};

export default WriteReview;
