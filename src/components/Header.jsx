const Header = ({title, imagen, subtitulo}) => {
    return (
    <>
    <h1 style={{fontSize: '50px', position: 'absolute', marginTop: '50px', marginLeft:'30%', color:'white'}}> {title} </h1>
    <h3 style={{fontSize: '30px', position: 'absolute', marginTop: '150px', marginLeft:'28%', color:'white'}}>{subtitulo}</h3>
    <img className="header" src= {imagen}/>
    </>
    )
    }
    export default Header;