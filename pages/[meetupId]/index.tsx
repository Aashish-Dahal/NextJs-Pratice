import {
  MeetupDetail,
  MeetupDetailProps,
} from "../../components/meetups/MeetupDetail";

export default function MeetupDetails({
  image,
  title,
  description,
  address,
}: MeetupDetailProps) {
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}
