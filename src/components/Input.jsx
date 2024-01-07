/* eslint-disable react/prop-types */
export default function Input({ placeholder, label, name, errorInput }) {
  return (
    <div>
      <p className={`wordtop ${errorInput && "colorRed"}`}>{label}</p>
      <input
        type="number"
        placeholder={placeholder}
        name={name}
        className={`inputdiv ${errorInput && "inputdivErr"}`}
      />
      {errorInput ? (
        <p
          style={{
            color: " hsl(0, 100%, 67%)",
            fontSize: "11px",
            fontWeight: "lighter",
            fontStyle: "italic",
            paddingTop: 6,
          }}
        >
          this field is required
        </p>
      ) : null}
    </div>
  );
}
