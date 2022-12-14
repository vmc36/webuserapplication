export function InputForm({ placeholder, type, name, ...register }) {
  return (
    <input
      className="form-label inline-block mb-2 text-gray-700"
      placeholder={placeholder}
      type={type}
      name={name}
    />
  );
}
