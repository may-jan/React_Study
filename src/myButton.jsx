export default function MyButton({ count, handleClick }) {
  return <button onClick={handleClick}>count : {count}</button>;
}
