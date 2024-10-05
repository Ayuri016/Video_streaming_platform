import styled from "styled-components";

import React from 'react'
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { original } from "@reduxjs/toolkit";

import firebase from '../firebase';

import database from '../firebase';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

const Home = () => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends= [];
  let newDisneys =[];
  let originals = [];
  let trending =[];

  useEffect(()=>{
    // const db = firebase.firestore();
    // db.collection('movies').onSnapshot((snapshot)=>{

      const q = query(collection(db, "movies"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
       //  const unsubscribe = db.collection('movies').onSnapshot((snapshot)=>{
      snapshot.docs.map((doc)=>{
        console.log(recommends);
        switch(doc.data().type){
          case 'recommend':
            recommends= [...recommends,{id: doc.id, ...doc.data()}];
            break;

          case 'new':
            newDisneys= [...newDisneys,{id: doc.id, ...doc.data()}];
            break;

          case 'original':
            originals= [...originals,{id: doc.id, ...doc.data()}];
            break;

          case 'trending':
            trending= [...trending,{id: doc.id, ...doc.data()}];
             break;

        }
      });
    

    dispatch(
      setMovies({
      recommend: recommends,
      newDisney: newDisneys,
      original: originals,
      trending: trending,

    })
  )});
  return unsubscribe;
  }, [userName]);



  const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  
  &:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
  `;

  return (
    <Container>
     <ImgSlider></ImgSlider>
     <Viewers></Viewers>
     <Recommends></Recommends>
     <NewDisney></NewDisney>
     <Originals></Originals>
     <Trending></Trending>
    </Container>
  )
}

export default Home;