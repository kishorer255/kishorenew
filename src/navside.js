import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { FaBowlFood } from "react-icons/fa6";
import { PiBowlFoodFill } from "react-icons/pi";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiSaveFill } from "react-icons/ri";
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Recipes',
    path: '/recipes',
    icon: <FaBowlFood />,
    cName: 'nav-text'
  },
  {
    title: 'Desserts',
    path: '/desserts',
    icon: <PiBowlFoodFill />,
    cName: 'nav-text'
  },
  {
    title: 'Saved Recipes',
    path: '/saved',
    icon: <RiSaveFill />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Up/Login',
    path: '/login',
    icon: <RiLoginBoxFill />,
    cName: 'nav-text'
  },
];
