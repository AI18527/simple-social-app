import './App.css';
import { FormCreatorRegister } from './components/forms/register/register';
import { FormCreatorLogin } from './components/forms/login/login';
import { FormCreatorPost } from './components/forms/post-creator/post-creator';

import { Post } from './components/post/post';
import { useState } from 'react';

function App() {

  let [userName, setName] = useState("");
  let [postContent, setContent] = useState("");
  let [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Social App</h1>
      </header>

      <main>
        <div>
          <div className='userForms'>
            <FormCreatorRegister name = { userName } setPosts ={[]}/>
            <FormCreatorLogin login = { userName } setPosts = {setPosts}/>
          </div>
          <FormCreatorPost post = { postContent } />
        </div>
        <div className='posts'>
          {
            posts.map((post, index) => {
              return (
                <Post key={index} id = {post.id} content = {post.content} likes = {post.likes} userName = {post.userName} />
              );
            })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
