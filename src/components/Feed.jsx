import React, { useState } from "react";
import styled from "styled-components";
import Photo from "./../images/photo.jpg";
import Avatar from "./../images/avatar.jpg";

const FeedWrapper = styled.div`
  display: flex;
  max-width: 700px;
  margin: auto;
  margin-top: 20px;
  flex-direction: column;
  background-color: #d3d0d0;
  border-radius: 15px;
  box-shadow: 0px 5px 7px lightgray;
  width: 100%;
  height: 100px;
`;
const HeaderFeed = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #f8f3f3;
  padding: 15px;

  form {
    flex: 1;
    display: flex;
  }

  input {
    outline-width: 0;
    border: none;
    padding: 5px 20px;
    margin: 0 15px;
    border-radius: 999px;
    background-color: #eeecec;
  }
  .feed_input {
    width: 500px;
  }
  button {
    display: none;
  }
`;
const BottomFeed = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  .optional {
    cursor: pointer;
  }

  :hover {
    background-color: whitesmoke;
    border-radius: 15px;
  }
`;
const ImageWrapper = styled.img`
  width: 30px;
  margin-top: 5px;
  padding: 0 10px;
  align-items: center;
`;
const Image = styled.img`
  width: 40px;
`;

const Feed = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // db

    setInput("");
    setImageUrl("");
  };

  return (
    <FeedWrapper>
      <HeaderFeed>
        <div className="feed_top">
          <form>
            <Image src={Avatar} alt="Avatar" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="feed_input"
              placeholder="What is on your mind?"
            />
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="feed_image"
              placeholder="Image URL (Optional)"
            />
            <button onClick={handleSubmit} type="btnSubmit">
              Hidden submit
            </button>
          </form>
        </div>
      </HeaderFeed>
      <BottomFeed>
        <div className="optional">
          <ImageWrapper src={Photo} alt="photo" />
          Photo/Video
        </div>
      </BottomFeed>
    </FeedWrapper>
  );
};

export default Feed;
