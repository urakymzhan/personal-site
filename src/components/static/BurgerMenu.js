export default function BurgerMenu({ open, setOpen }) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9,
        // background: open ? "#fff" : "transparent",
        left: "20px",
        top: "20px",
        width: "30px",
        height: "30px",
      }}
      open={open}
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <img
          src={require("../../assets/menu-close-64.png").default}
          className="menu-icon"
          alt="circle menu close"
          style={{ height: "100%", width: "100%", background: "#fff" }}
        />
      ) : (
        <img
          src={require("../../assets/menu-open-50.png").default}
          className="menu-icon"
          alt="circle menu open"
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </div>
  );
}
