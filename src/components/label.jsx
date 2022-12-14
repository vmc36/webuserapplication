export function LabelForm({ label, id }) {
  return (
    <label className="form-label inline-block text-gray-700 w-1/2" htmlFor={id}>
      {label}
    </label>
  );
}
