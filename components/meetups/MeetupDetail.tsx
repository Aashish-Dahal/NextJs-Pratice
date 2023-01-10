import { FC, Fragment } from "react";

export interface MeetupDetailProps {
  image: string;
  title: string;
  description: string;
  address: string;
}
export const MeetupDetail: FC<MeetupDetailProps> = ({
  image,
  title,
  description,
  address,
}) => {
  return (
    <Fragment>
      <img src={image} alt="A First Meetup"></img>
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </Fragment>
  );
};
