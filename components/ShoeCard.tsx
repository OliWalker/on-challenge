import Image from "next/image";
import { Button } from "./Button";

import shoeCardStyles from "./shoeCard.module.css";

type ShoeCardProps = {
  shoe: {
    name: string;
  };
};

export const ShoeCard: React.FC<ShoeCardProps> = ({ shoe }) => {
  return (
    <div className={shoeCardStyles.shoeCard}>
      <div className={shoeCardStyles.shoeCardInner}>
        <div className={shoeCardStyles.shoeCardInnerImg}>
          <Image
            src={`/assets/${shoe.name}.png`}
            alt={shoe.name}
            width={200}
            height={100}
            objectFit="contain"
            className={shoeCardStyles.shoeCardInnerImg}
          />
        </div>
        <h3 className="subTitle">{shoe.name}</h3>
        <p className="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, sed
          tempora officia sequi iusto deserunt molestiae.
        </p>

        <p className="body">
          <b>200 CHF</b>
        </p>
      </div>
      <Button onClick={() => window.alert("Great Choice!")}>Shop Now</Button>
    </div>
  );
};
