export { Layout };

function Layout({ children, custom }) {
  return (
    <div className={`${custom ? custom : ""} pt-4`}>
      <div className="container">{children}</div>
    </div>
  );
}
