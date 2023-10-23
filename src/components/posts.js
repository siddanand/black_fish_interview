import posts from "../models/posts.json";
import User from "../widgets/user";
export default function Posts() {
  return (
    <div style={{ margin: "0 20px 0 20px" }}>
      {posts.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              textAlign: "left",
              padding: "10px",
              cursor: "pointer",
              background: "white",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
          >
            <User value={{ user: item }} />
            <div style={{ padding: "10px 50px 10px 50px" }}>
              <center>
                <img
                  src={item.icon}
                  style={{
                    borderRadius: "10px",
                    height: "200px",
                    width: "100%",
                  }}
                />
                <h3 style={{ textAlign: "left", marginTop: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ textAlign: "left" }}>{item.description}</p>
                <div style={{ textAlign: "left" }}>
                  {item.tags.map((item) => {
                    return <span style={{ marginRight: "5px" }}>#{item}</span>;
                  })}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", cursor:'pointer' }}
                >
                  <p>5 reactions</p>
                  <p>7 comments</p>
                  <p>2 min read</p>
                </div>
              </center>
            </div>
          </div>
        );
      })}
    </div>
  );
}
