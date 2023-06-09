import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";

const Header = (props) => {
  return (
    <header className="top-header">
      <div className="top-header__left-side">
        <div className="top-header__menu-btn">
          <i className="fas fa-bars" />
        </div>
        <div className="top-header__search-btn">
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="top-header__logo"></div>
      <div className="top-header__account">
        <img
          src="https://randomuser.me/api/portraits/men/16.jpg"
          className="top-header__user-img"
        />
        <div className="top-header__user-name">Bryant</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  );
};

export default Header;
