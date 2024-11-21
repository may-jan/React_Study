export default function MyButton({ count, handleClick }: any) {
  return <button onClick={handleClick}>count : {count}</button>;
}
