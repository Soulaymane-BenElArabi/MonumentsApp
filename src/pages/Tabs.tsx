import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Tabs.css";
import { IonGrid,IonRow,IonCol, IonInput, IonContent,  IonCardTitle, IonButton} from '@ionic/react';

const Tabs:React.FC = ()=>{
  const [monument, setMonument]=useState<any>([]);
  const [filtrage, setFiltrage] = useState<string>("");
  const getMonuments = async ()=>{
    const res =await axios.get("http://localhost:3000/monuments");
    setMonument(res.data);
  }
  useEffect(() => {
    getMonuments() }, []);
    console.log(monument);
  return(
      <IonContent>
        <IonCardTitle color="success" className="title">Les Monuments :</IonCardTitle>
        <IonGrid>
          <IonRow>
            <IonInput className="filtre" type="text" placeholder="Filtrer par ville ..." onIonChange={(e) => setFiltrage(e.detail.value!)} ></IonInput>
          </IonRow>
          <IonRow style={{background:"#0275d8"}}>
            <IonCol >#Id</IonCol>
            <IonCol >Nom</IonCol>
            <IonCol >Ville</IonCol>
            <IonCol >Longitude</IonCol>
            <IonCol >Latitude</IonCol>
          </IonRow>
          { monument.filter((item:any)=>{
            if(filtrage===""){
              return item
            }else if(item.ville.toLowerCase().includes(filtrage.toLocaleLowerCase())) {
              return item

            }

          }).map((element:any)=>{
            return(
            < IonRow className="monument" key = {element.id}>
            <IonCol >{element.id}</IonCol>
            <IonCol >{element.nom}</IonCol>
            <IonCol >{element.ville}</IonCol>
            <IonCol >{element.longitude}</IonCol>
            <IonCol >{element.latitude}</IonCol>
          </IonRow>)
          })} 
        </IonGrid>
        <IonButton expand="full" color="danger" href="#">Ajouter monuments:</IonButton>

      </IonContent>
    
  )
}

/* const Tabs: React.FC = () => {
 return ( 
   <IonReactRouter>
   <IonContent>
    <IonTabs>
    <IonRouterOutlet>
    <Route path="/tabs/monuments" component={Monument} exact />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="monuments" href="/tabs/monuments">
        <IonIcon icon={calendar} />
        <IonLabel>Monuments</IonLabel>
      </IonTabButton>

      <IonTabButton tab="/tabs/users">
        <IonIcon icon={personCircle} />
        <IonLabel>Users</IonLabel>
      </IonTabButton>

      <IonTabButton tab="visite">
        <IonIcon icon={map} />
        <IonLabel>Visite</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about" href="login">
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
    </IonTabBar>
    
  </IonTabs>
  </IonContent>
  </IonReactRouter>
)
    
} */
export default Tabs;