export default function Wrapper(props) {
  return <div className={`${props.className}`}>{props.children}</div>;
}
