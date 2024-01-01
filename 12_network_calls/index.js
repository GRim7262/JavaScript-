// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log({ response });
//     return response.json();
//   })
//   .then((json) => console.log(json));

(async () => {
  // HOW TO PERFORM 'GET' REQUEST
  const fetchPostById = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  //   const post = await fetchPostById(1);

  // HOW TO PERFORM 'POST' REQUEST

  const newPost = {
    userId: 555,
    // id: 555,
    title: "Do Some Coding",
  };

  const createNewPost = async (post) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  //   const createdPost = await createNewPost(newPost);
  //   console.log(createdPost);

  // HOW TO PERFORM 'PUT' REQUEST

  const updatePost = async (id, post) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  //   const updatedPost = await updatePost(1, {
  //     userId: 555,
  //     title: "Do Some Coding",
  //     body: "This is updated post",
  //   });
  //   console.log(updatedPost);

  const deletePost = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const deletedPost = await deletePost(1);
  //   console.log(deletedPost);
})();
