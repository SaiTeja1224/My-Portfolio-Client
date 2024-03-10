type Themes = 'dark' | 'light';

type props = {
    theme : Themes,
    setTheme : (a: Themes) => any
}

const Utility = (props : props) => {
  const handleThemeChange = () => {
    if(props.theme === "dark"){
      props.setTheme("light")
    } else {
      props.setTheme("dark")
    }
  }
  return (
    <aside className="utils">
      <div className="utils__container">
        <a href="#home" className="utils__btn">
          <img src="portfolio/image/to-top.gif" width={30} height={35} />
        </a>
      </div>
      <div className="utils__container">
        <button className="utils__btn" onClick={() => {handleThemeChange()}}>
          <img src="portfolio/image/dark-mode.gif" width={30} height={30} />
        </button>
      </div>
    </aside>
  );
};

export default Utility;
