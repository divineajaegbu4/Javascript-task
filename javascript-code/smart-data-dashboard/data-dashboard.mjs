import axios from "axios";

const smartDataDashboard = async () => {
  try {
    const usersRes = await axios.get("https://dummyjson.com/users");

    const usersData = usersRes.data.users;

    const postRes = usersData.map((user) =>
      axios.get(`https://dummyjson.com/posts?userId=${user.id}`)
    );

    const postData = await Promise.allSettled(postRes);

    console.log(postData);

    const commentsRes = postData.map((post, idx) =>
      axios.get(
        `https://dummyjson.com/comments?postId=${post.value.data.posts[idx].id}`
      )
    );

    const getComments = await Promise.allSettled(commentsRes);


    const getData = usersData.map((user, id) => {
      const getComment = getComments[id].value.data.comments.map(
        (comment) => comment
      );
      return postData[id].value.data.posts.map((post) => {
        return {
          userId: post.userId,
          post: post,
          data: user,
          comments: getComment,
        };
      });
    });

    console.log("=================================");

    const topThreeUsers = getData
      .map((data, id) => {
        return {
          index: id + 1,
          users: data[id].data,
          post: data[id].post,
          comments: data[id].comments,
        };
      })
      .sort((a, b) => b.index - a.index)
      .slice(0, 3);

    const topThreeUsersPost = topThreeUsers
      .map((user, id) => {
        // console.log("===============Users", user);
        const {
          index,
          users: { firstName, lastName, gender, image, age, email },
        } = user;
        const {
          title,
          body,
          views,
          reactions: { likes, dislikes },
        } = user.post;

        return {
          "post-number": index,
          Name: `${firstName} ${lastName}`,
          gender: gender,
          image: image,
          age: age,
          email: email,
          title: title,
          post: body,
          comments: user.comments[id].body,
          likes: likes,
          dislikes: dislikes,
          views: views,
        };
      })
      .sort((a, b) => a["post-number"] - b["post-number"]);

    console.log(topThreeUsersPost);
  } catch (err) {
    console.log(err);
  }
};

smartDataDashboard();
