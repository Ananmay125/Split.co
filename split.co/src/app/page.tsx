import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="nav-bar-1">
        <h2 className="justaheading">Split.co</h2>
        <div className="nav-bar-div">
          <img 
            src="favicon.ico"
            className="account-img"
            width={35}
            height={35}
          ></img>
          <input type="text" placeholder="Search" className="search-box"></input>
          <p className="nav-bar-text">Home</p>
          <p className="nav-bar-text">Favorites</p>
          <p className="nav-bar-text">Friends</p>
        </div>
      </nav>
      <div className="part-1">
        <nav className="sidebar">
            <ul className="sidebar-list">
              <h3>General</h3>
              <li className="sidebar-list-link">Friends</li>
              <li className="sidebar-list-link">Favourites</li>
              <li className="sidebar-list-link">Servers</li>
              <li className="sidebar-list-link">Community</li>
              <h3>Games</h3>
              <li className="sidebar-list-link">Singleplayer</li>
              <li className="sidebar-list-link">Co-op</li>
              <li className="sidebar-list-link">paid</li>
              <li className="sidebar-list-link">free</li>
            </ul>
        </nav>

        <div className="display">
          <img
            src="image.png"
            className="display-case-img"
          ></img>
          <div className="display-case-div">
            <h1 className="display-case-heading">Terraria</h1>
            <h3 className="display-case-text">2D minecraft....</h3>
            <div className="tag-div">            
              <p className="tags">2D</p><p className="tags">survival</p><p className="tags">open-world</p>
            </div>
          </div>
        </div>
      /</div>

      <main></main>
    </>
  );
}
