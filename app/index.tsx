import { Text, View } from "react-native";

function Circle() {
    return <View style={st_circle} />;
}

function Blank() {
    return <View style={ [st_circle, {backgroundColor: undefined, borderWidth: 0} ] } />;
}

export default function Index() {
  return (
    <View>

    </View>
  );
}
