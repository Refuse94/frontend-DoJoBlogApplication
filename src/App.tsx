import "./App.css";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NewBlog } from "./components/NewBlog";
/*import { BlogDetails } from "./components/BlogDetails";*/

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Main></Main>
            </Route>
            <Route path="/create">
              <NewBlog></NewBlog>
            </Route>
            {/* <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route> */}
          </Switch>
        </Router>
      </header>
    </div>
  );
};
