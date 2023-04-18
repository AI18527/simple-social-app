import "./login.css";

export function FormCreatorLogin({ setPosts }) {

    const sumbitTheForm = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/login", {
            credentials: 'include',
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              name: event.target.userName.value,
            }),
          }).then(res => {if (res.ok) getPosts()});
      }

    const getPosts = () => {fetch("http://localhost:3000/posts/", {
        credentials: 'include',
        method: "GET",
      }).then(response => response.json())
      .then(data => {if (data) setPosts(data)});
    }

    const logout = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/logout", {
            credentials: 'include',
            method: "POST",
          });
    }

  return (
    <div className="Login">
      <label> Login </label>
      <form onSubmit={sumbitTheForm}>
        <div>
          <input type="text" name="userName" placeholder="Enter name" />
          <button type="submit">Login</button>
          <button id = "logout" type="button" onClick={ logout }>Logout</button>
        </div>
      </form>
    </div>
  );
}