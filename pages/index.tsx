import { MeetupList } from "../components/meetups/MeetupList";

const meetupList = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1673219954168-f4598d3b06bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    address: "Baneshwor,Kathmandu nepal",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1673280293847-97ad70e7512a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    address: "Balaju,Kathmandu nepal",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.unsplash.com/photo-1673234759103-4bc13ee175d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    address: "Chabahil,Kathmandu nepal",
    description: "This is a third meetup",
  },
];
export default function Homepage() {
  return <MeetupList meetupList={meetupList} />;
}
