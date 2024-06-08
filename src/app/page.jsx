"use client";
import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import {
  GiAppleCore,
  GiAppleSeeds,
  GiAvocado,
  GiBeerBottle,
  GiBerriesBowl,
  GiBottleCap,
  GiBowlOfRice,
  GiBread,
  GiBroccoli,
  GiButter,
  GiCandyCanes,
  GiCarrot,
  GiChicken,
  GiChickenLeg,
  GiFishCooked,
  GiFriedEggs,
  GiFullPizza,
  GiHamburger,
  GiMartini,
  GiOlive,
  GiOrange,
  GiPeanut,
  GiPear,
  GiPotato,
  GiSoapExperiment,
  GiTomato,
} from "react-icons/gi";
import { motion } from "framer-motion";
import Menu from "./components/Menu";
import { recomendaciones } from "./Vari";
import { Oswald } from "next/font/google";
import "./globals.css";

const os = Oswald({ subsets: ["latin"],weight:['600'] });

export default function Home() {
  const arr=recomendaciones
  const [Ami, setAmi] = useState(6);
  const [Nami, setNami] = useState(6);
  const [con, setCon] = useState(4);
  return (
    <main className="">
      <motion.nav layout initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}}viewport={{once:true}} transition={{duration:0.5}} className="w-screen bg-slate-50/50 border-b-2 border-slate-900/30 backdrop-blur justify-around h-20 fixed top-0 flex p-8">
        <h1 style={os.style} className="">Creado Por Franco Ponce</h1>
        <div className=" flex justify-around w-1/2">
          <motion.a layout initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}}viewport={{once:true}} transition={{duration:0.5,delay:0.5}} className="text-lg hover:scale-105 hover:underline transition-all" href="#inicio">Inicio</motion.a>
          <motion.a layout initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}}viewport={{once:true}} transition={{duration:0.5,delay:0.6}} className="text-lg hover:scale-105 hover:underline transition-all" href="#amig">Alimentos amigables</motion.a>
          <motion.a layout initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}}viewport={{once:true}} transition={{duration:0.5,delay:0.7}} className="text-lg hover:scale-105 hover:underline transition-all" href="#noamig">Alimentos evitables</motion.a>
          <motion.a layout initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}}viewport={{once:true}} transition={{duration:0.5,delay:0.8}} className="text-lg hover:scale-105 hover:underline transition-all" href="#cocinar">Recetas</motion.a>
          <motion.a layout initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}}viewport={{once:true}} transition={{duration:0.5,delay:0.9}} className="text-lg hover:scale-105 hover:underline transition-all" href="#consejos">Consejos</motion.a>
        </div>
      </motion.nav>
      <motion.div
      id='inicio'
        className="h-screen bg-fixed w-screen bg-cover items-center p-24 flex"
        style={{ backgroundImage: 'url("/doctores.jpg")' }}
      >
        <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.5,delay:0.5}} className=" backdrop-blur-md p-24 rounded-xl flex flex-col gap-4 bg-slate-800/30">
          <h1 style={os.style} className="text-9xl text-white">DIABETES</h1>
          <p className="text-slate-100 text-2xl">
            Conoce las mejores opciones y controla tu vida
          </p>
          <div className="w-full flex items-center gap-6">
            <a className="text-lg text-white p-2 rounded-xl bg-emerald-600 hover:bg-emerald-400 hover:text-black transition-all cursor-pointer">
              Conoce mas
            </a>
            <a className="text-sm text-black bg-transparent p-2 rounded-xl border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer">
              Pagina oficial de salud
            </a>
          </div>
        </motion.div>
      </motion.div>
      <div className=" bg-slate-50 w-screen h-[80vh] mt-32 flex flex-col gap-8 p-12 ">
        <div className="flex items-center justify-center flex-col gap-4">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center "
        >
          Pero
        </motion.p>
        <motion.h1 style={os.style}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center text-9xl"
        >
          ¿Que es la diabetes?
        </motion.h1 >
        </div>
        <div className="w-auto h-auto flex justify-center">
          {
            arr[3].detalles.map((t,i)=>{
              return(
                <motion.p      key={i}       initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 ,delay:i}} className="p-2 border-2 rounded-xl w-1/2">{`${t}`}</motion.p >
              )
            })
          }
        </div>
      </div>
      <div id='amig' className="w-screen h-screen bg-slate-50 flex flex-col gap-12 p-24">
        <motion.h1 style={os.style}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center text-9xl"
        >
          Alimentos Amigables
        </motion.h1 >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-auto flex gap-2"
        >
          <div className="w-1/3 h-full gap-4 flex flex-col justify-around">
            <button
              onClick={() => {
                setAmi(1);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Vegetales <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setAmi(2);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Granos Enteros <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setAmi(3);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Proteinas Magras <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setAmi(4);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Grasas Saludables <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setAmi(5);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Frutas <FaArrowRight />
            </button>
          </div>
          <div className="w-2/3 h-full gap-4 flex flex-col items-center justify-around">
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Ami == 1 ? "block" : "hidden"
              } items-center justify-around`}
            >
              <h2 className="text-xl border-b-2 text-green-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-green-700 p-8 flex items-center gap-2 justify-center">
                Brocoli
                <GiBroccoli />
              </h2>
              <h2 className="text-xl border-b-2 text-red-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-red-700 p-8 flex items-center gap-2 justify-center">
                Tomate <GiTomato />
              </h2>
              <h2 className="text-xl border-b-2 text-green-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-green-700 p-8 flex items-center gap-2 justify-center">
                Espinaca <GiBroccoli />
              </h2>
              <h2 className="text-xl border-b-2 text-orange-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-orange-700 p-8 flex items-center gap-2 justify-center">
                Zanahoria <GiCarrot />
              </h2>
              <h2 className="text-xl border-b-2 text-green-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-green-700 p-8 flex items-center gap-2 justify-center">
                Kale <GiBroccoli />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Ami == 2 ? "block" : "hidden"
              } items-center justify-around`}
            >
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Arroz Integral
                <GiBowlOfRice />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Quinoa <GiBowlOfRice />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Avena <GiBowlOfRice />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Pan Integral
                <GiBread />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Ami == 3 ? "block" : "hidden"
              } items-center justify-around`}
            >
              <h2 className="text-xl border-b-2 text-orange-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-orange-700 p-8 flex items-center gap-2 justify-center">
                Pechuga de pollo
                <GiChickenLeg />
              </h2>
              <h2 className="text-xl border-b-2 text-red-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-red-700 p-8 flex items-center gap-2 justify-center">
                Pechuga de pavo <GiChicken />
              </h2>
              <h2 className="text-xl border-b-2 text-sky-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-sky-700 p-8 flex items-center gap-2 justify-center">
                Pescado <GiFishCooked />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Tofu
                <GiBowlOfRice />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Ami == 4 ? "block" : "hidden"
              } items-center justify-around`}
            >
              <h2 className="text-xl border-b-2 text-green-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-green-700 p-8 flex items-center gap-2 justify-center">
                Aguacate
                <GiAvocado />
              </h2>
              <h2 className="text-xl border-b-2 text-violet-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-violet-700 p-8 flex items-center gap-2 justify-center">
                Frutos secos <GiPeanut />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Semillas <GiAppleSeeds />
              </h2>
              <h2 className="text-xl border-b-2 text-emerald-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-emerald-700 p-8 flex items-center gap-2 justify-center">
                Aceite de oliva
                <GiOlive />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Ami == 5 ? "block" : "hidden"
              } items-center justify-around`}
            >
              <h2 className="text-xl border-b-2 text-violet-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-violet-700 p-8 flex items-center gap-2 justify-center">
                Moras
                <GiBerriesBowl />
              </h2>
              <h2 className="text-xl border-b-2 text-red-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-red-700 p-8 flex items-center gap-2 justify-center">
                Manzanas <GiAppleCore />
              </h2>
              <h2 className="text-xl border-b-2 text-orange-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-orange-700 p-8 flex items-center gap-2 justify-center">
                Citricos <GiOrange />
              </h2>
              <h2 className="text-xl border-b-2 text-green-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-green-700 p-8 flex items-center gap-2 justify-center">
                Peras <GiPear />
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div id='noamig' className="w-screen h-screen bg-slate-50 flex flex-col gap-12 p-24">
        <motion.h1 style={os.style}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center text-9xl"
        >
          Alimentos a Evitar
        </motion.h1 >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-auto flex gap-2"
        >
          <div className="w-1/3 h-full gap-4 flex flex-col justify-around">
            <button
              onClick={() => {
                setNami(1);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Bebidas Azucaradas <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setNami(2);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Carbohidratos Procesados <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setNami(3);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Grasas Trans <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setNami(4);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Alimentos Altos en Sodio <FaArrowRight />
            </button>
            <button
              onClick={() => {
                setNami(5);
              }}
              className="text-xl border-b-2 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-black p-8 flex items-center gap-2 justify-center"
            >
              Alcohol <FaArrowRight />
            </button>
          </div>
          <div className="w-2/3 h-full gap-4 flex flex-col items-center justify-around">
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Nami == 1 ? "block" : "hidden"
              } items-center justify-center`}
            >
              <h2 className="text-xl border-b-2 text-red-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-red-700 p-8 flex items-center gap-2 justify-center">
                Refrescos
                <GiBottleCap />
              </h2>
              <h2 className="text-xl border-b-2 text-orange-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-orange-700 p-8 flex items-center gap-2 justify-center">
                Zumos azucarados <GiOrange />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Nami == 2 ? "block" : "hidden"
              } items-center justify-center`}
            >
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Pan blanco
                <GiBread />
              </h2>
              <h2 className="text-xl border-b-2 text-orange-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-orange-700 p-8 flex items-center gap-2 justify-center">
                Dulces <GiCandyCanes />
              </h2>
              <h2 className="text-xl border-b-2 text-amber-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-amber-700 p-8 flex items-center gap-2 justify-center">
                Cereales Azucarados <GiBowlOfRice />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Nami == 3 ? "block" : "hidden"
              } items-center justify-around`}
            >
              <h2 className="text-xl border-b-2 text-yellow-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-yellow-700 p-8 flex items-center gap-2 justify-center">
                Comida frita
                <GiFriedEggs />
              </h2>
              <h2 className="text-xl border-b-2 text-orange-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-orange-700 p-8 flex items-center gap-2 justify-center">
                Snacks empaquetados <GiPotato />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Margarina <GiButter />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Nami == 4 ? "block" : "hidden"
              } items-center justify-around`}
            >
              <h2 className="text-xl border-b-2 text-red-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-red-700 p-8 flex items-center gap-2 justify-center">
                Carnes procesadas
                <GiHamburger />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Sopas enlatadas <GiSoapExperiment />
              </h2>
              <h2 className="text-xl border-b-2 text-amber-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-amber-700 p-8 flex items-center gap-2 justify-center">
                Comida rapida <GiFullPizza />
              </h2>
            </motion.div>
            <motion.div
              layout
              className={`w-1/2 h-full gap-4 flex flex-col ${
                Nami == 5 ? "block" : "hidden"
              } items-center justify-center`}
            >
              <h2 className="text-xl border-b-2 text-amber-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-amber-700 p-8 flex items-center gap-2 justify-center">
                Cerveza
                <GiBeerBottle />
              </h2>
              <h2 className="text-xl border-b-2 text-slate-700 hover:rounded-xl hover:border-2 transition-all hover:gap-8 border-slate-700 p-8 flex items-center gap-2 justify-center">
                Cocteles azucarados <GiMartini />
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div id="cocinar" className="w-screen bg-slate-50 flex items-center justify-center flex-col gap-4">
      <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center "
        >
          La pregunta es
        </motion.p>
        <motion.h1 style={os.style}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center text-9xl"
        >
          ¿Que cocinar?
        </motion.h1 >
      </div>
      <Menu/>
      <div id="consejos" className="w-screen bg-slate-50 flex items-center justify-center flex-col gap-4">
      <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center "
        >
          Mejora aun mas tu calidad con estos
        </motion.p>
        <motion.h1 style={os.style}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full text-center text-9xl"
        >
          CONSEJOS
        </motion.h1 >
      </div>
      <div className="w-screen h-screen p-24 gap-4 flex items-start justify-around">
        <motion.div layout className={`w-1/3 ${con==1?'h-full':'h-1/5'} rounded-xl flex p-8 gap-2 flex-col items-center justify-around border-2 border-slate-900`}>
        <h1 style={os.style} className="w-full text-center text-4xl">{arr[0].tipo}</h1>
        <motion.ol layout className={`w-full h-full flex flex-col justify-around ${con==1?'block':'hidden'}`}>
          {
            arr[0].detalles.map((t,i)=>{
              return(
                <motion.li      key={i}      initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>- {t}</motion.li>
              )
            })
          }
        </motion.ol>
        <motion.button layout className="text-lg text-white p-2 rounded-xl bg-emerald-600 hover:bg-emerald-400 hover:text-black transition-all cursor-pointer" onClick={()=>{
          con==1?setCon(4):setCon(1)
        }}>{con==1?<FaAngleUp/>:<FaAngleDown/>}</motion.button>
        </motion.div>
        <motion.div layout className={`w-1/3 ${con==2?'h-full':'h-1/5'} rounded-xl flex p-8 gap-2 flex-col items-center justify-around border-2 border-slate-900`}>
        <h1 style={os.style} className="w-full text-center text-4xl">{arr[1].tipo}</h1>
        <motion.ol layout className={`w-full h-full flex flex-col justify-around ${con==2?'block':'hidden'}`}>
          {
            arr[1].detalles.map((t,i)=>{
              return(
                <motion.li  key={i}          initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>- {t}</motion.li>
              )
            })
          }
        </motion.ol>
        <motion.button layout className="text-lg text-white p-2 rounded-xl bg-emerald-600 hover:bg-emerald-400 hover:text-black transition-all cursor-pointer" onClick={()=>{
          con==2?setCon(4):setCon(2)
        }}>{con==2?<FaAngleUp/>:<FaAngleDown/>}</motion.button>
        </motion.div>
        <motion.div layout className={`w-1/3 ${con==3?'h-full':'h-1/5'} rounded-xl flex p-8 gap-2 flex-col items-center justify-around border-2 border-slate-900`}>
        <h1 style={os.style} className="w-full text-center text-4xl">{arr[2].tipo}</h1>
        <motion.ol layout className={`w-full h-full flex flex-col justify-around ${con==3?'block':'hidden'}`}>
          {
            arr[2].detalles.map((t,i)=>{
              return(
                <motion.li key={i}           initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}>{t}</motion.li>
              )
            })
          }
        </motion.ol>
        <motion.button layout className="text-lg text-white p-2 rounded-xl bg-emerald-600 hover:bg-emerald-400 hover:text-black transition-all cursor-pointer" onClick={()=>{
          con==3?setCon(4):setCon(3)
        }}>{con==3?<FaAngleUp/>:<FaAngleDown/>}</motion.button>
        </motion.div>
      </div>
    </main>
  );
}
