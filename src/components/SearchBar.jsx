export default function SeachBar(props) {
  return (
    <form action={props.handleForm} className="search-bar">
      <input
        type="text"
        name="ingredient"
        placeholder="e.g. oregano"
        aria-label="Add ingredient."
        required
      ></input>
      <button>Add ingredient</button>
    </form>
  );
}
