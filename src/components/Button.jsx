export function Button(props) {
    let {buttonText,buttonStyle} = props;
    return (
    <button className={buttonStyle}>{buttonText}</button>

);
  }