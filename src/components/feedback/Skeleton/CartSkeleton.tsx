import ContentLoader from "react-content-loader";



const CartSkeleton = () => {
    const SkeletonList = Array(2)
    .fill("")
    .map((_, index) => {
      return (
        
        <ContentLoader 
        speed={2}
        width={500}
        height={240}
        viewBox="0 0 500 240"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        key={index}
      >
        <rect x="185" y="19" rx="6" ry="6" width="120" height="10" /> 
        <rect x="34" y="17" rx="6" ry="6" width="139" height="202" /> 
        <rect x="188" y="41" rx="6" ry="6" width="90" height="10" /> 
        <rect x="428" y="75" rx="6" ry="6" width="60" height="11" /> 
        <rect x="187" y="176" rx="6" ry="6" width="139" height="41" /> 
        <rect x="107" y="310" rx="0" ry="0" width="32" height="0" /> 
        <rect x="95" y="318" rx="0" ry="0" width="1" height="0" /> 
        <rect x="434" y="95" rx="0" ry="0" width="50" height="30" /> 
        <rect x="39" y="226" rx="0" ry="0" width="508" height="4" />
      </ContentLoader>
        
      );
    });
  return (
    <div>{SkeletonList}</div>
  )
}

export default CartSkeleton