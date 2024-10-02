/* eslint-disable react/prop-types */
import logo from '../assets/logo.webp'

function Logo({ widthDef = '50px' }) {
    return (
        <img src={logo}
            alt="LogoImg"
            style={{
                width: widthDef,
                borderRadius: "50%",
            }}
        />
    )
}

export default Logo 