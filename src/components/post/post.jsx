import './post.css'

export function Post({ id, content, likes, userName}) {

    const deletePost = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/posts/" + id, {
            credentials: 'include',
            method: "DELETE",
          });
      }

      const likePost = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/posts/" + id +"/like", {
            credentials: 'include',
            method: "POST",
          });
      }

  return (
    <div className="post">
      { content }
      <div className='likes'>
        Likes: { likes }
        <button onClick={ likePost }>Like</button>
      </div>
      <button onClick={ deletePost }>Delete</button>
    </div>
  )
}