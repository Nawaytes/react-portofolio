export default function Post(props) {
  return (
    <div className='post'>
      <div className='title-post'>
        <a href={props.postUrl}>{props.title}</a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          className='date-post'
          style={{
            marginRight: "10px",
          }}
        >
          {props.date}
        </div>
        |
        <div className='author-post' style={{ marginLeft: "10px" }}>
          {props.tags}
        </div>
      </div>
      <p style={{ textAlign: "justify" }}>{props.content}</p>
    </div>
  );
}
