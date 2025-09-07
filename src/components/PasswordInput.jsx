import zxcvbn from "zxcvbn";

function PasswordInput({ value, onChange }) {
  const strength = zxcvbn(value).score;
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const colors = ["red", "orange", "yellow", "blue", "green"];

  return (
    <div className="mb-4">
      <input
        type="password"
        placeholder="Enter password"
        value={value}
        onChange={onChange}
        className="p-2 border rounded w-full text-black"
      />

      {value && (
        <div className="mt-2">
          <div
            className="h-2 rounded"
            style={{
              width: `${(strength + 1) * 20}%`,
              backgroundColor: colors[strength],
            }}
          />
          <p className="text-sm mt-1">{strengthLabels[strength]}</p>
        </div>
      )}
    </div>
  );
}

export default PasswordInput;
