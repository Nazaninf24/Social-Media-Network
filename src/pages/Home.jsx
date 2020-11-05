import React from "react";

import Container from "react-bootstrap/Container";
import PostsUserForm from "../components/PostsUserForm";
import { useSelector } from "react-redux";


const Home = () => {
  const user = useSelector((state) => state.userCreate.user.username);

  return (
    <div className="text-center">
    <Container>
      <h1>Welcome on My Social Network </h1>
      {user && <PostsUserForm />}
    </Container>
    </div>
  );
};
export default Home;
