import { FC } from "react";
import { MeetupItem, MeetupItemProps } from "./MeetupItem";
import classes from "./MeetupList.module.css";
interface MeetupListProps {
  meetupList: Array<MeetupItemProps>;
}
export const MeetupList: FC<MeetupListProps> = ({ meetupList }) => {
  return (
    <ul className={classes.list}>
      {meetupList.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
};
