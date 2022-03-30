import React, { useEffect, useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PersonList = () => {
  // const [persons, setPerson] = useState();

  // const componentDidMount = () => {
  //     axios.get(`https://jsonplaceholder.typicode.com/users`)
  //         .then(res => {
  //             const person = res.data;
  //             setPerson({person});
  //         })
  //         .catch(error => console.log(error));
  // }

  const [post, setPost] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    //lay du lieu tu web chinh ve
    axios
      .get(`${baseURL}/1`)
      .then((Response) => {
        setPost(Response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  //day du lieu muon tao len
  function createPost() {
    axios
      .post(baseURL, {
        titile: "Hello word!",
        body: "This is new post",
      })
      .then((Response) => {
        setPost(Response.data);
      });
  }

  // update du lieu
  function updatesPost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello word",
        body: "This is update post.",
      })
      .then((Response) => {
        setPost(Response.data);
      });
  }

  function deletePost() {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("post deleted!");
      setPost(null);
    });
  }

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post";

  return (
    // <ul>
    //     {/* {persons.map(person => <li>{person.name}</li>)} */}
    // </ul>
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatesPost}>Updates Post</button>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
};

export default PersonList;
