// eslint-disable-next-line react/prop-types
const MenuItem = ({ image, name, content, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <h6>{content}</h6>
      <p style={{ color: "red", fontStyle: "italic", fontSize: "20px" }}>
        {price} TL
      </p>
    </div>
  );
};

export default MenuItem;
