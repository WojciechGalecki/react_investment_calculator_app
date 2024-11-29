export default function UserInput({ title, onChange }) {
  return (
    <p>
      <label>{title}</label>
      <input
        type="number"
        required
        defaultValue="0"
        onChange={onChange}
      />
    </p>
  );
}
