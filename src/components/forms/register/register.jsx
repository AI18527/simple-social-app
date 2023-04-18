import "./register.css";

export function FormCreatorRegister() {

  const sumbitTheForm = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/register", {
        credentials: 'include',
        method: "POST",
        headers: {"Content-Type": "application/json"},            body: JSON.stringify({
        name: event.target.userName.value,
        }),
    });
  }


  return (
    <div className= "Register" >
      <label> Register </label>
      <form onSubmit={sumbitTheForm}>
        <div>
          <input type="text" name= "userName" placeholder="Enter name" />
          <button type="submit"> Register </button>
        </div>
      </form>
    </div>
  );
}