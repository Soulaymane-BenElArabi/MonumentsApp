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
const Register:React.FC=()=>{
    const nomRef = useRef<HTMLIonInputElement>(null);
    const prenomRef = useRef<HTMLIonInputElement>(null);
    const emailRef = useRef<HTMLIonInputElement>(null);
    const numTeleRef = useRef<HTMLIonInputElement>(null);
    const passwordRef = useRef<HTMLIonInputElement>(null);

    const history = useHistory();

    const registerUser = async () => {
    const nom = nomRef.current?.value!+""; 
    const prenom = prenomRef.current?.value!+"";
    const email = emailRef.current?.value!+"";
    const numTele = numTeleRef.current?.value!+"";
    const password = passwordRef.current?.value!+""; 
       let formField = new FormData();
       formField.append("nom", nom);
        formField.append("prenom", prenom);
        formField.append("email", email);
        formField.append("password", password);
        formField.append("numTele", numTele);
        console.log(nom);
        await axios({
          method: "post",
          url: "http://localhost:3000/user/register",
          data: formField,
        }).then(
          (res) => {
            console.log("done");
            history.push("/home");

          },
          (error) => {
            console.log(error);
          }
        );
      };

    

    return (<IonApp>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Inscrivez vous :</IonTitle>
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
        <IonLabel position="floating">Prenom :</IonLabel>
        <IonInput  ref={prenomRef} /* onChange={(e)=>{setPrenom(e.currentTarget.value+"")}} */ ></IonInput>
      </IonItem>
      </IonRow>
      <IonRow >
      <IonItem>
        <IonLabel position="floating">Email :</IonLabel>
        <IonInput type="email" ref={emailRef} /* onChange={(e:React.FormEvent<HTMLIonInputElement>):void=>{ setEmail(e.currentTarget.value+"")}} */ ></IonInput>
      </IonItem>
      </IonRow>
      <IonRow >
      <IonItem>
        <IonLabel position="floating">Password :</IonLabel>
        <IonInput type="password" ref={passwordRef} /* onChange={(e)=>{setPassword(e.currentTarget.value+"")}} */ ></IonInput>
      </IonItem>
      </IonRow>
      <IonRow >
      <IonItem>
        <IonLabel position="floating">Numero de telephone :</IonLabel>
        <IonInput  ref={numTeleRef} /* onChange={(e)=>{setNumTele(e.currentTarget.value+"")}} */ ></IonInput>
      </IonItem>
      </IonRow>
      <IonRow >
      <IonButton color="success" onClick={registerUser}>Register</IonButton>
      </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>)

}
export default Register;