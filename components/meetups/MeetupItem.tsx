import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { FC } from "react";
import { useRouter } from "next/router";
export interface MeetupItemProps {
  image: string;
  title: string;
  address: string;
  id: string;
}
export const MeetupItem: FC<MeetupItemProps> = ({
  image,
  title,
  address,
  id,
}) => {
  const router = useRouter();
  function showDetailHandler() {
    router.push("/" + id);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};
