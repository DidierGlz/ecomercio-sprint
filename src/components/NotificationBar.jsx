// src/components/NotificationBar.jsx
export default function NotificationBar({ message, type = "info", onClose }) {
  if (!message) return null;

  const bg = type === "success"
    ? "#e8f5e9"
    : type === "error"
    ? "#ffebee"
    : "#e3f2fd";

  const border = type === "success"
    ? "#81c784"
    : type === "error"
    ? "#e57373"
    : "#64b5f6";

  return (
    <div
      style={{
        background: bg,
        borderBottom: `2px solid ${border}`,
        padding: "8px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
      }}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ✕
      </button>
    </div>
  );
}
