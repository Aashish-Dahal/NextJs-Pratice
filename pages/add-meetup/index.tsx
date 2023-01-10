import NewMeetupForm from "../../components/meetups/NewMeetupForm";
export default function AddMeetupPage() {
  function addMeetupHandler(enteredMeetupData: any) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
