"use client"
import Image from "next/image";
import HeaderComponent from "../../components/HeaderComponent";
import SectionHome from "../../components/SectionHome";
import JoinUsComponent from "../../components/JoinUsComponent";
import WeAreComponent from "../../components/WeAre";
import FooterComponent from "../../components/FooterComponent";
export default function Home() {
  return (
   <div>
    <HeaderComponent/>
    <SectionHome/>
    <WeAreComponent/>
    <JoinUsComponent/>
    <FooterComponent/>
   </div>
  );
}
