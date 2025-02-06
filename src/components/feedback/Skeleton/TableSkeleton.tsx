import ContentLoader from "react-content-loader"

const TableSkeleton = () => {
  return (
    <ContentLoader
    height={200}
    width={400}
    viewBox="0 0 400 200"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
    
  >
    <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
    <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
    <rect x="295" y="15" rx="3" ry="3" width="130" height="10" />
    <rect x="15" y="50" rx="4" ry="4" width="130" height="10" />
    <rect x="155" y="50" rx="3" ry="3" width="130" height="10" />
    <rect x="295" y="50" rx="3" ry="3" width="130" height="10" />
    <rect x="15" y="85" rx="4" ry="4" width="130" height="10" />
    <rect x="155" y="85" rx="3" ry="3" width="130" height="10" />
    <rect x="295" y="85" rx="3" ry="3" width="130" height="10" />
    
  </ContentLoader>
)
}

export default TableSkeleton