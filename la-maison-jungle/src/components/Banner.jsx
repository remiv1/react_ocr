import logo from '../assets/logo-maison-jungle.svg'

function Banner() {
    const title = 'La Maison Jungle'
    return (
        <div className="lmj-banner">
            <img className="lmj-logo" src={logo} alt="La Maison Jungle logo" />
            <h1>{title}</h1>
        </div>
    )
}

export default Banner
