import React, { useRef, useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {  IonApp,
    IonContent, 
    IonHeader, 
    IonInput, 
    IonItem, 
    IonLabel, 
    IonToolbar, 
    IonTitle,
    IonButton,
    IonGrid,
    IonRow
  } from '@ionic/react';
const Monument:React.FC = ()=>{
    const nomRef = useRef<HTMLIonInputElement>(null);
    const villeRef = useRef<HTMLIonInputElement>(null);
    const longitudeRef = useRef<HTMLIonInputElement>(null);
    const latitudeRef = useRef<HTMLIonInputElement>(null);
    const passwordRef = useRef<HTMLIonInputElement>(null);

    const history = useHistory();

    const registerUser = async () => {
    const nom = nomRef.current?.value!+""; 
    const ville = villeRef.current?.value!+"";
    const longitude = longitudeRef.current?.value!+"";
    const latitude = latitudeRef.current?.value!+"";
       let formField = new FormData();
       formField.append("nom", nom);
        formField.append("ville", ville);
        formField.append("longitude", longitude);
        formField.append("longitude", latitude);
        console.log(nom);
        await axios({
          method: "post",
          url: "http://localhost:3000/ajout",
          data: formField,
        }).then(
          (res) => {
            console.log("done");
            history.push("/tabs");
            window.location.reload(false);

          },
          (error) => {
            console.log(error);
          }
        );
      };
    return(
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Ajout des Monuments:</IonTitle>
                </IonToolbar>
            </IonHeader>
        <IonContent className="ion-padding">
        <IonGrid>
        <IonRow >
            <IonItem>
                <IonLabel position="floating">Nom :</IonLabel>
                <IonInput  ref={nomRef} /* onIonInput={(e:any)=>{setNom(e.target.value)}} */ ></IonInput>
            </IonItem>
      </IonRow>
      <IonRow >
      <IonItem>
        <IonLabel position="floating">ville :</IonLabel>
        <IonInput  ref={villeRef} /* onChange={(e)=>{setville(e.currentTarget.value+"")}} */ ></IonInput>
      </IonItem>
      </IonRow>
      <IonRow >
      <IonItem>
        <IonLabel position="floating">longitude :</IonLabel>
        <IonInput type="text" ref={longitudeRef} /* onChange={(e:React.FormEvent<HTMLIonInputElement>):void=>{ setlongitude(e.currentTarget.value+"")}} */ ></IonInput>
      </IonItem>
      </IonRow>
      
      <IonRow >
      <IonItem>
        <IonLabel position="floating">Numero de telephone :</IonLabel>
        <IonInput  ref={latitudeRef} /* onChange={(e)=>{setlatitude(e.currentTarget.value+"")}} */ ></IonInput>
      </IonItem>
      </IonRow>
      <IonRow >
      <IonButton color="success" onClick={registerUser}>Register</IonButton>
      </IonRow>


        </IonGrid>
        </IonContent>
        </IonApp>
        
    )
}
export default Monument;