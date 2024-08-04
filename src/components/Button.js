function Button({button}) {
    return (
        <button onClick={button.func}>
            {button.name}
        </button>
    )
}

export default Button;