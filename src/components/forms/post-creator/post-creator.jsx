import "./post-creator.css";

export function FormCreatorPost({ }) {

    const sumbitTheForm = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/posts", {
            credentials: 'include',
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              content: event.target.postContent.value,
            }),
          });
      }

  return (
    <div className="Post">
      <label> Make post </label>
      <form onSubmit={sumbitTheForm}>
        <div id="postMaker">
          <textarea type="text" name="postContent" placeholder="Enter content" />
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}