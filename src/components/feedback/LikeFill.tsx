import dislike from "@assets/svg/like.svg";


const LikeFill = ({ handleLike,id }: { handleLike: (id: number) => void;id:number }) => {
  return (
    <img
            onClick={() => {
              handleLike(id);
            }}
            src={dislike}
            alt={dislike}
          />
  )
}

export default LikeFill