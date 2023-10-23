export default function User(props) {
  let user = props.value.user;
  return (
    <div style={{ display: "flex" }}>
      <img
        src={user.icon}
        style={{
          borderRadius: "50%",
          marginRight: "10px",
          height: "50px",
          width: "50px",
        }}
      />
      <div>
        <span style={{ fontSize: "20px" }}>{user.name}</span>
        <div style={{ fontSize: "12px" }}>{user.date}</div>
      </div>
    </div>
  );
}
