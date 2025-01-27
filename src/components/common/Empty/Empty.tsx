
const Empty = ({section}:{section:string}) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {`Your ${section} is empty`}
        </div>
  )
}

export default Empty