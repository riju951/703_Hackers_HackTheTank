import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import { pageLoad } from "./redux/actions/pageAction";

function App() {
  const [editor, setEditor] = useState(null);
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   pageLoad()(dispatch);
  // }, [dispatch]);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor", 
      plugins:[gjsPresetWebpage],
      pluginsOpts:{
        gjsPresetWebpage:{},
      },
    })
    setEditor(editor);
  }, []);


  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Home}></Route>
    //     <Route exact path="/editor/:pageId" component={Editor}></Route>
    //   </Switch>
    // </Router>
    <div className="App">
      <div id= "editor"></div>
    </div>
  );
}

export default App;