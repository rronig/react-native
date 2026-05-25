import {students} from "../data/students";
import Header from "../components/header";
import StudentProfile from "../components/studentprofile";
import { FlatList, View } from "react-native";

const StudentScreen =()=>{return(<View style={{ flex: 1 }}><Header/><FlatList
  data={students}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <StudentProfile first_name={item.first_name} last_name={item.last_name} email={item.email} birthdate={item.birthdate} hobbies={item.hobbies} />
  )}
/></View>);};
export default StudentScreen;