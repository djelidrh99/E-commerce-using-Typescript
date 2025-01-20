import { useEffect, useState } from "react";
import style from "./style.module.css";

const { container, CartCounter, iconWrraper, cartCounterAnimation } = style;

type HeaderCounterType = {
  title: string;
  iconSvg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  count?: number;
};

export default function HeaderCounter({
  title,
  iconSvg,
  count,
}: HeaderCounterType) {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (count === 0) {
      return;
    }

    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [count]);

  return (
    <div className={container}>
      <div className={iconWrraper}>
        {iconSvg({})}
        <div className={isAnimate ? cartCounterAnimation : CartCounter}>
          {count}
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
