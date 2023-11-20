import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Image, TextInput, CheckBox, Linking } from 'react-native';
import { useFonts, NewRocker_400Regular } from '@expo-google-fonts/new-rocker';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import Button from './components/Button';

export default function App() {
  const [isChecked, setChecked]=useState(false);
  const [isChecked2, setChecked2]=useState(false);
  const [isChecked3, setChecked3]=useState(false);
  const [isChecked4, setChecked4]=useState(false);
  const [isChecked5, setChecked5]=useState(false);

  //Понть как заменить много функций одной
  function Sort(){
    var showcase=document.getElementById("showcase");
    var sortContainer=[document.getElementById("sort").children[0].children[0].children[1],document.getElementById("sort").children[1].children[0].children[1],
    document.getElementById("sort").children[2].children[0].children[1],document.getElementById("sort").children[3].children[0].children[1],
    document.getElementById("sort").children[4].children[0].children[1]];
    for(var i=0;i<showcase.children.length;++i){
      if(isChecked==false&&showcase.children[i].id!="Aria"){
        showcase.children[i].style.display="none";
        sortContainer[1].setAttribute('disabled','');
        sortContainer[2].setAttribute('disabled','');
        sortContainer[3].setAttribute('disabled','');
        sortContainer[4].setAttribute('disabled','');
      }
      else{
        showcase.children[i].style.display="flex";
        for(var j=0;j<sortContainer.length;++j){
          sortContainer[j].removeAttribute('disabled');
        }
      }
    }
  }
  function Sort2(){
    var showcase=document.getElementById("showcase");
    var sortContainer=[document.getElementById("sort").children[0].children[0].children[1],document.getElementById("sort").children[1].children[0].children[1],
    document.getElementById("sort").children[2].children[0].children[1],document.getElementById("sort").children[3].children[0].children[1],
    document.getElementById("sort").children[4].children[0].children[1]];
    for(var i=0;i<showcase.children.length;++i){
      if(isChecked2==false&&showcase.children[i].id!="ACDC"){
        showcase.children[i].style.display="none";
        sortContainer[0].setAttribute('disabled','');
        sortContainer[2].setAttribute('disabled','');
        sortContainer[3].setAttribute('disabled','');
        sortContainer[4].setAttribute('disabled','');
      }
      else{
        showcase.children[i].style.display="flex";
        for(var j=0;j<sortContainer.length;++j){
          sortContainer[j].removeAttribute('disabled');
        }
      }
    }
  }
  function Sort3(){
    var showcase=document.getElementById("showcase");
    var sortContainer=[document.getElementById("sort").children[0].children[0].children[1],document.getElementById("sort").children[1].children[0].children[1],
    document.getElementById("sort").children[2].children[0].children[1],document.getElementById("sort").children[3].children[0].children[1],
    document.getElementById("sort").children[4].children[0].children[1]];
    for(var i=0;i<showcase.children.length;++i){
      if(isChecked3==false&&showcase.children[i].id!="Queen"){
        showcase.children[i].style.display="none";
        sortContainer[0].setAttribute('disabled','');
        sortContainer[1].setAttribute('disabled','');
        sortContainer[3].setAttribute('disabled','');
        sortContainer[4].setAttribute('disabled','');
      }
      else{
        showcase.children[i].style.display="flex";
        for(var j=0;j<sortContainer.length;++j){
          sortContainer[j].removeAttribute('disabled');
        }
      }
    }
  }
  function Sort4(){
    var showcase=document.getElementById("showcase");
    var sortContainer=[document.getElementById("sort").children[0].children[0].children[1],document.getElementById("sort").children[1].children[0].children[1],
    document.getElementById("sort").children[2].children[0].children[1],document.getElementById("sort").children[3].children[0].children[1],
    document.getElementById("sort").children[4].children[0].children[1]];
    for(var i=0;i<showcase.children.length;++i){
      if(isChecked4==false&&showcase.children[i].id!="Nirvana"){
        showcase.children[i].style.display="none";
        sortContainer[0].setAttribute('disabled','');
        sortContainer[1].setAttribute('disabled','');
        sortContainer[2].setAttribute('disabled','');
        sortContainer[4].setAttribute('disabled','');
      }
      else{
        showcase.children[i].style.display="flex";
        for(var j=0;j<sortContainer.length;++j){
          sortContainer[j].removeAttribute('disabled');
        }
      }
    }
  }
  function Sort5(){
    var showcase=document.getElementById("showcase");
    var sortContainer=[document.getElementById("sort").children[0].children[0].children[1],document.getElementById("sort").children[1].children[0].children[1],
    document.getElementById("sort").children[2].children[0].children[1],document.getElementById("sort").children[3].children[0].children[1],
    document.getElementById("sort").children[4].children[0].children[1]];
    for(var i=0;i<showcase.children.length;++i){
      if(isChecked5==false&&showcase.children[i].id!="GAndR"){
        showcase.children[i].style.display="none";
        sortContainer[0].setAttribute('disabled','');
        sortContainer[1].setAttribute('disabled','');
        sortContainer[2].setAttribute('disabled','');
        sortContainer[3].setAttribute('disabled','');
      }
      else{
        showcase.children[i].style.display="flex";
        for(var j=0;j<sortContainer.length;++j){
          sortContainer[j].removeAttribute('disabled');
        }
      }
    }
  }
  let [fontsLoaded] = useFonts({
    NewRocker_400Regular,
  });
  if(!fontsLoaded){
    return <AppLoading/>;
  }
  else{
  return (
      <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>VinylVanya</Text>
      </View>

        <View style={styles.main}>

          <View style={styles.describtion}>
            <Text style={styles.describtionText}>Hello and welcome to the VinylVanya store website.<br/>
                                                You can buy rare vinyl records from us.<br/>
                                                Let's fricking rock!!!<br/></Text>
            <Image source={require('./assets/images/OIG (1).jfif')} style={styles.describtionImage}/>
          </View>

          <View id='sort' style={styles.sort}>

          <View style={styles.checkboxCont}>
            <CheckBox style={styles.checkbox} value={isChecked} onValueChange={setChecked} onChange={()=>Sort()}/>
            <Text style={styles.checkboxText}>Aria</Text>
            </View>
          <View style={styles.checkboxCont}>
            <CheckBox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} onChange={()=>Sort2()}/>
            <Text style={styles.checkboxText}>ACDC</Text>
            </View>
          <View style={styles.checkboxCont}>
            <CheckBox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} onChange={()=>Sort3()}/>
            <Text style={styles.checkboxText}>Queen</Text>
            </View>
          <View style={styles.checkboxCont}>
            <CheckBox style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} onChange={()=>Sort4()}/>
            <Text style={styles.checkboxText}>Nirvana</Text>
            </View>
          <View style={styles.checkboxCont}>
            <CheckBox style={styles.checkbox} value={isChecked5} onValueChange={setChecked5} onChange={()=>Sort5()}/>
            <Text style={styles.checkboxText}>GAndR</Text>
            </View>
          </View>

          <View id='showcase' style={styles.showcase}>

          <View id='Aria' style={styles.vinyl}>
            <Image source={require('./assets/images/Aria/Armagedon.jpg')} style={styles.image}/>
              <Button label="Buy me Babe" />
              </View>
              
          <View id='ACDC' style={styles.vinyl}>
            <Image source={require('./assets/images/ACDC/HighwayToHell.jpg')} style={styles.image}/>
            <Button label="Buy me Babe" />
              </View>
              
          <View id='Queen' style={styles.vinyl}>
            <Image source={require('./assets/images/Queen/Miracle.jpg')} style={styles.image}/>
            <Button label="Buy me Babe" />
              </View>

          <View id='Queen' style={styles.vinyl}>
            <Image source={require('./assets/images/Queen/Queen2.jpg')} style={styles.image}/>
            <Button label="Buy me Babe" />
              </View>

          <View id='Nirvana' style={styles.vinyl}>
            <Image source={require('./assets/images/Nirvana/Nevermind.jpg')} style={styles.image}/>
            <Button label="Buy me Babe" />
              </View>
              
          <View id='GAndR' style={styles.vinyl}>
            <Image source={require('./assets/images/G&R/AppetiteForDestruction.jpg')} style={styles.image}/>
            <Button label="Buy me Babe" />
              </View>

          </View>
          
          <View style={styles.contacts}>
            <View style={styles.inputs}>
              <TextInput style={styles.feedbackInput} placeholder='Put your feedback here' />
              <Button label="Send feedback"/>
            </View>
              <Image source={require('./assets/images/map.jfif')} style={styles.mapImage}/>
          </View>

      </View>
      <View style={styles.footer}>
      <Text style={styles.describtionText}>This site was made as a first project<br/>
      on react native by Ilya Pereselak:</Text>
      <a href='https://github.com/PereselakIlya' target='_blank' style={styles.gitHubButton}>
        <Image source={require('./assets/images/25231.png')} style={styles.gitHubButtonArea}></Image></a>
      </View>
      <StatusBar style="auto" />
    </View>
    );
  };
}
//разобратс как подклюать стили отдельным файлом
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: scroll,
  },
  header:{
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginTop:'30px',
    marginBottom:'30px',
  },
  footer:{
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginBottom:'30px',
  },
  title:{
    color:'white', 
    fontFamily:'NewRocker_400Regular',
    fontSize: 'xxx-large',
  },
  main:{
    width:'100%',
    display: 'flex',
    alignItems: 'center',
  },
  vinyl:{
    width:'250px',
    height:'300px',
    marginBottom: '30px',
    border:'1px solid white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  image:{
    width:'240px',
    height:'80%',
    //border:'1px solid white',
  },
  showcase:{
    width:'60%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contacts:{
    width:'60%',
    height:'auto',
    display:'flex',
    alignItems:'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    marginBottom:'30px',
    justifyContent:'space-evenly',
  },
  inputs:{
    height:'120px',
    width:'40%',
    border:'1px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'flex-start',
    margin:'10px',
  },
  feedbackInput:{
    paddingBottom:'25px',
    paddingLeft:'10px',
    marginTop:'10px',
    marginBottom:'10px',
    width:'90%',
    height:'70px',
    color:'white',
    fontFamily:'NewRocker_400Regular',
    border:'1px solid white',
  },
  mapImage:{
    width:'250px',
    height:'100px',
    marginTop:'10px',
    marginBottom:'10px',
    //border:'1px solid white',
  },
  checkboxCont:{
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:'10px',
    height:'20px',
  },
  checkbox:{
    alignSelf:'center',
  },
  checkboxText:{
    margin:8,
    color:'white',
    fontFamily:'NewRocker_400Regular',
  },
  sort:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:'30px',
  },
  describtion:{
    width:'40%',
    height: '250px',
    display:'flex',
    flexDirection:'row-reverse',
    flexWrap:'wrap',
    justifyContent:'space-around',
  },
  describtionText:{
    //height:'80%',
    color:'white',
    fontFamily:'NewRocker_400Regular',
  },
  describtionImage:{
    height:'80%',
    width:'40%',
  },
  gitHubButton:{
    height:'100%',
    width:'3%',
    backgroundColor:'white',
    borderRadius:20,
    marginLeft:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  gitHubButtonArea:{
    height:'100%',
    width:'100%',
  }
});  