import { Text, View } from "react-native";

function Circle() {
    return <View style={st_circle} />;
}

function Blank() {
    return <View style={ [st_circle, {backgroundColor: undefined, borderWidth: 0} ] } />;
}

var st_circle = {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgb(0, 200, 255)',
    borderWidth: 1,
    margin: 2
};

var st_dice = {
    backgroundColor: 'rgb(255, 240, 200)',
    padding: 10
};

function Dice() {
    return (
        <View style={st_dice}>
            <View style={{flexDirection: 'row'}}><Circle/><Circle/><Circle/></View>
            <View style={{flexDirection: 'row'}}><Circle/><Circle/><Circle/></View>
            <View style={{flexDirection: 'row'}}><Circle/><Circle/><Circle/></View>
        </View>
    )
}

function Dice6() {
    return (
        <View style={st_dice}>
            <View style={{flexDirection: 'row'}}><Circle/><Blank/><Circle/></View>
            <View style={{flexDirection: 'row'}}><Circle/><Blank/><Circle/></View>
            <View style={{flexDirection: 'row'}}><Circle/><Blank/><Circle/></View>
        </View>
    )
}


export default function Index() {
  return (
    <View style={{flex:1, alignItems:'center'}}>
        <Dice/>
        <View style={{height:20}}/>
        <Dice6/>
    </View>
  );
}
