//import axios from "axios";
import Feed from "components/Feed";
import Post from "components/Post";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HomeWraapper = styled.div`
  width: 0 710px;
  margin: auto;
  width: 100%;
  align-items: center;
  /* background-color: grey; */
  border: 2px solid lightgrey;
  box-sizing: border-box;
`;
function loadPosts(callback) {
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "http://127.0.0.1:8000/api/posts/";
  const responseType = "json";
  xhr.responseType = responseType;
  xhr.open(method, url);
  xhr.onload = function () {
    callback(xhr.response, xhr.status);
  };
  xhr.oneerror = function (e) {
    console.log(e);
    callback({ message: "the request was an error" }, 400);
  };
  xhr.send();
}

const HomeView = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const mycallback = (response, status) => {
      console.log(response, status);
      if (status === 200) {
        setPosts(response);
      } else {
        alert("there was an error");
      }
    };
    loadPosts(mycallback);
  }, []);

  return (
    <HomeWraapper>
      <div className="home">
        <Feed />

        {posts.map((post, index) => (
          <Post
            profilePic="https://previews.123rf.com/images/sokolfly/sokolfly2004/sokolfly200400066/145760719-vector-illustration-of-woman-in-medical-face-mask-flat-person-portrait-avatar-design-female-head-ico.jpg"
            username="Suniti Sainju"
            message={post.content}
          />
        ))}

        {/* <Post
          profilePic="https://previews.123rf.com/images/sokolfly/sokolfly2004/sokolfly200400066/145760719-vector-illustration-of-woman-in-medical-face-mask-flat-person-portrait-avatar-design-female-head-ico.jpg"
          username="Suniti Sainju"
          message="Online class will be halted from May 7, 2021 until May 14, 2021 as per the admininstration."
        />
        <Post
          profilePic="https://cdn.nohat.cc/thumb/f/720/comrawpixel2310838.jpg"
          username="Jenny Tmg"
          image="https://image.freepik.com/free-vector/young-woman-with-face-mask-sick-coronavirus-covid-19_24877-62819.jpg"
        />  */}
      </div>
    </HomeWraapper>
  );
};

export default HomeView;
