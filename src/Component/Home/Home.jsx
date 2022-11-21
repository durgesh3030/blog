import "./Home.css";
import BlogList from "../Bloglist/BlogList";
import useFetch from "../../useFetch";

// const Home = () => {
//   // const handleClick = () => {
//   //   //  console.log('hello ninjas', );
//   //   setName('durgesh');
//   //   setAge(23);
//   // }
//   // const handleClickAgain = (name, e) => {
//   //   console.log('hello ' + name, e.target);

//   // eslint-disable-next-line no-unused-vars
//   const [blogs, setBlogs] = useState(null);
//   // const [blogs, setBlogs] = useState([
//   //   {
//   //     title: "my new website1",
//   //     body: "lorem  ispusm....",
//   //     author: "mario",
//   //     id: 1,
//   //   },
//   //   {
//   //     title: "my new website2",
//   //     body: "lorem ispusm....",
//   //     author: "lugies",
//   //     id: 2,
//   //   },
//   //   {
//   //     title: "my new website3",
//   //     body: "lorem ispusm....",
//   //     author: "aosxa",
//   //     id: 3,
//   //   },
//   //   {
//   //     title: "my new website4",
//   //     body: "lorem ispusm....",
//   //     author: "nexta",
//   //     id: 4,
//   //   },
//   //   {
//   //     title: "my new website5",
//   //     body: "lorem ispusm....",
//   //     author: "senta",
//   //     id: 5,
//   //   },
//   //   {
//   //     title: "my new website6",
//   //     body: "lorem ispusm....",
//   //     author: "mario2",
//   //     id: 6,
//   //   },
//   // ]);

//   // const handleDelete = (id) => {
//   //   const newBlogs = blogs.filter((blog) => blog.id !== id);
//   //   setBlogs(newBlogs);
//   // };

//   useEffect(() => {
//     fetch(" http://localhost:8000/blogs")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setBlogs(data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return (
//     <div className="home">
//       {/* <h2>homepage</h2> */}
//       {/* <p>{name} is {age} years old</p>
//       <button onClick={handleClick}>Click me</button>
//      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
//       {/* {blogs.map((blog)=>(
//       <div className="blog-previw" key={blog.id}>
//         <h2>{blog.title}</h2>
//         <p>Written by {blog.author}</p>
//       </div>
//      ))} */}
//       {/* <BlogList blogs={blogs} title="All Blogs" />
//       <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="mario's bloog"/> */}
//       {blogs && <BlogList blogs={blogs} title="All Blogs" />}
//       {/* <button onClick={() => setName("durgesh")}> Change Name</button> */}
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
