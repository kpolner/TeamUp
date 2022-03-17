const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {Title: "Create an event!"};

export default Header