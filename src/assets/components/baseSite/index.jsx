import Sidebar from "../sideBar";

export default function BaseSite({ children }) {
  return (
    <div className="fundoSite">
      <Sidebar />
      <div className="fundoImg">{children}</div>
    </div>
  );
}
