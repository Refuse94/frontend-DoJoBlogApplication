import "./App.css";
import { Author, Blog, Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NewBlog } from "./components/NewBlog";
import { BlogDetails } from "./components/BlogDetails";
import { useFetch } from "./components/useFetch";
import { BlogList } from "./components/BlogList";

export const App: React.FC = () => {
  const {
    data: blogs,
    isPending: loadingBlogs,
    error: errorBlogs,
  } = useFetch<Blog[]>("http://localhost:5000/blogs/");
  const {
    data: authors,
    isPending: loadingAuthors,
    error: errorAuthors,
  } = useFetch<Author[]>("http://localhost:5000/authors");

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              {loadingBlogs ? (
                "Blogs loading..."
              ) : blogs ? (
                <BlogList blogs={blogs}></BlogList>
              ) : (
                `Error loading blogs:${errorBlogs}`
              )}
            </Route>
            <Route path="/create">
              {loadingAuthors ? (
                "Authors loading..."
              ) : authors ? (
                <NewBlog authors={authors}></NewBlog>
              ) : (
                `Error loading authors:${errorAuthors}`
              )}
            </Route>
            <Route path="/blogs/:id">
              {loadingAuthors || loadingBlogs ? (
                "Authors and blogs loading..."
              ) : authors && blogs ? (
                <BlogDetails authors={authors} blogs={blogs}></BlogDetails>
              ) : (
                `Error loading authors or blogs ${
                  errorAuthors ? errorAuthors : errorBlogs
                }`
              )}
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};
