export default function StatCard({ title, value, green, purple }) {
  return (
    <div className="card">
      <p>{title}</p>
      <h3 className={`${green ? "green" : ""} ${purple ? "purple" : ""}`}>
        {value}
      </h3>
    </div>
  );
}