/* eslint-disable react/prop-types */
 
function Logo({ widthDef = '50px' }) {
    return (
        <img src="/public/logo.webp"
            alt="LogoImg"
            style={{
                width: widthDef,
                borderRadius: "50%",
            }}
        />
    )
}

export default Logo 