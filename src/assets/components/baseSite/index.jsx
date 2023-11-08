import PropTypes from 'prop-types';
import Sidebar from "../sideBar";

export default function BaseSite({ children }) {
  return (
    <div className="fundoSite">
      <Sidebar />
      <div className="fundoImg">{children}</div>
    </div>
  );
}

BaseSite.propTypes = {
  children: PropTypes.node,
};
