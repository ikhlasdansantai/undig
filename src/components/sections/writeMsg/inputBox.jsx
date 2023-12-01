export default function InputBox({ placeholder, name }) {
  return <input type="text" name={name} placeholder={placeholder} className="rounded-lg px-2 py-3 w-full" />;
}
