export default function Input({ placeholder, label, name }) {
  return (
    <div>
      <p
        style={{
          color: "hsl(0, 1%, 44%)",
          fontSize: "12px",
          letterSpacing: 2,
        }}
      >
        {label}
      </p>
      <input type="number" placeholder={placeholder} name={name} />
    </div>
  );
}
