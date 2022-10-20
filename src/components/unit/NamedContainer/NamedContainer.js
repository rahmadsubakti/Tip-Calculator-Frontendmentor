import './_NamedContainer.scss';

const NamedContainer = ({name, className,children}) => {
  return (
    <div className={"named-container" + " " + className}>
      <p>{name}</p>
      {children}
    </div>
  )
}

export default NamedContainer;