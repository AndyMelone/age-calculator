/* eslint-disable react/prop-types */
export default function Period({ periodValue, period }) {
  return (
    <div className="period">
      <h1>{periodValue ? periodValue : "--"}</h1>
      <h1
        style={{
          fontWeight: "bold",
        }}
      >
        {period}
      </h1>
    </div>
  );
}
