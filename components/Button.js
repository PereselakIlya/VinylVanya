import { StyleSheet, Pressable, Text } from 'react-native';

export default function Button({label}){
    return(
    <Pressable style={styles.buttonContainer} onPress={()=>alert('Button is pressed.')}>
        <Text style={styles.buttonTitle}>{label}</Text>
        </Pressable>
    );
}
const styles=StyleSheet.create({
    buttonContainer:{
        width:'50%',
        height:'20px',
        //border:'1px solid white',
        display:'flex',
        alignItems:'center',
      },
      buttonTitle:{
        color:'white',
        fontFamily:'NewRocker_400Regular',
      },
});