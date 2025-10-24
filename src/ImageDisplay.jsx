export default function ImageDisplay() {
  return (
    <section style={{ textAlign: "center", padding: "2rem" }}>
      <img
        src={`${import.meta.env.BASE_URL}mindset.png`}
        alt="Mindset"
        style={{
          width: "60%",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      />
      <p>Displayed from public/mindset.png</p>
    </section>
  );
}
