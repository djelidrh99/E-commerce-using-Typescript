import like from "@assets/svg/like-fill.svg";



const Like = ({ handleLike,id }: { handleLike: (id: number) => void;id:number }) => {
  return (
    <img
            onClick={() => {
              handleLike(id);
            }}
            src={like}
            alt={like}
          />
  )
}

export default Like