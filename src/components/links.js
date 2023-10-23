import links from "../models/links.json";

export default function Links() {
  return (
    <div>
      {links.map((item) => {
        return (
          <div key={item.id} style={{textAlign:'left', cursor:'pointer'}}>
            <img
              src={item.icon}
              style={{
                borderRadius: "50%",
                marginRight: "20px",
                height: "30px",
                width: "30px",
              }}
            />
            <span style={{ fontSize: "20px" }}>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}
