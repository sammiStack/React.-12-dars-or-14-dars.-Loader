export default function Book (props) {
  return props.name ? (
    <div>
      <h2>{(props.name) ? <span>{props.name}</span> : 'default book'}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
      <b>{props.children}</b>
    </div>
  ) : null
}