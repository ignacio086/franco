"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Menu() {
  const arr = [
    {
      titulo: "Carta Para Desayuno",
      todo: [
        {
          comida: "Batido de espinacas, plátano y leche de almendras, acompañado de una tostada de pan integral con aguacate.",
          foto: "/batidoespinaca.webp"
        },
        {
          comida: "Tazón de avena con fresas frescas y nueces, junto con un huevo revuelto con espinacas.",
          foto: "/tazonconavena.jpeg"
        },
        {
          comida: "Tortilla de claras de huevo con espinacas y tomates, acompañada de una rebanada de pan integral.",
          foto: "/tortilladeclaras.jpg"
        },
        {
          comida: "Yogur griego bajo en grasa con rodajas de manzana y almendras.",
          foto: "/yogurtconmanzana.jpeg"
        },
        {
          comida: "Batido de frutas con espinacas, leche de almendras y semillas de chía.",
          foto: "/batidoespfrut.jpeg"
        },
        {
          comida: "Tostadas de pan integral con aguacate y tomate, acompañadas de una pieza de fruta fresca.",
          foto: "/tostadaaguacate.jpeg"
        },
        {
          comida: "Porridge de avena con plátano en rodajas y almendras.",
          foto: "/porridge-platano.jpg"
        },
        {
          comida: "Batido de proteínas con espinacas, plátano y leche de almendras.",
          foto: "/batidosprot.jpg"
        },
        {
          comida: "Sandwich integral con pavo, aguacate y tomate, acompañado de un puñado de almendras.",
          foto: "/sandwich-de-aguacate-y-pavo.jpg"
        },
        {
          comida: "Panqueques de avena con yogur griego y arándanos frescos.",
          foto: "/pancakes_de_avena.jpg"
        }
      ]
    },
    {
      titulo: "Carta Para Almuerzo",
      todo: [
        {
          comida: "Ensalada de quinoa con vegetales mixtos y pollo a la parrilla.",
          foto: "/ensaladaquinoa.jpeg"
        },
        {
          comida: "Salmón al horno con espárragos y una porción de arroz integral.",
          foto: "/salmonhornoverduras.jpg"
        },
        {
          comida: "Wrap de pollo con verduras y hummus, acompañado de una ensalada verde.",
          foto: "/wrappolloyver.jpeg"
        },
        {
          comida: "Pasta integral con salsa de tomate casera, espinacas y champiñones.",
          foto: "/pastaintegral.jpeg"
        },
        {
          comida: "Ensalada de lentejas con pimientos, cebolla, pepino y vinagreta balsámica.",
          foto: "/ensaladalentejasverduras.jpeg"
        },
        {
          comida: "Pollo a la plancha con batatas asadas y brócoli al vapor.",
          foto: "/polloplanchabrocoli.jpg"
        },
        {
          comida: "Rollitos de primavera caseros con camarones y vegetales, acompañados de salsa de soja baja en sodio.",
          foto: "/rollitoscamaron.jpeg"
        },
        {
          comida: "Tacos de pescado con repollo morado, aguacate y salsa de yogur.",
          foto: "/tacosdepescado.jpeg"
        },
        {
          comida: "Arroz integral con verduras salteadas al estilo asiático y tofu marinado.",
          foto: "/arroz-integral-con-verduras.jpg"
        },
        {
          comida: "Ensalada de garbanzos con tomate, pepino, cilantro y aderezo de limón.",
          foto: "/ensalada_de_garbanzos_con_verduras.jpg"
        }
      ]
    },
    {
      titulo: "Carta Para Merienda",
      todo: [
        {
          comida: "Yogur griego bajo en grasa con moras y almendras.",
          foto: "/yogurtmoras.webp"
        },
        {
          comida: "Palitos de zanahoria y pepino con hummus casero.",
          foto: "/palitoszanahoria.jpeg"
        },
        {
          comida: "Rodajas de manzana con mantequilla de almendras.",
          foto: "/manzanaconmantequilla.jpeg"
        },
        {
          comida: "Batido de proteínas con leche de almendras y plátano.",
          foto: "/batido-proteico-chocolate-platano-2.jpg"
        },
        {
          comida: "Puñado de frutos secos mixtos.",
          foto: "/frutossecos.jpg"
        },
        {
          comida: "Galletas de avena caseras con un vaso de leche desnatada.",
          foto: "/avenayleche.jpg"
        },
        {
          comida: "Tortitas de arroz con aguacate y tomate cherry.",
          foto: "/tortitadearroz.jpeg"
        },
        {
          comida: "Rollitos de jamón de pavo rellenos de queso crema light y espinacas.",
          foto: "/rollitosjamonqueso.jpeg"
        },
        {
          comida: "Batido de fresas con yogur griego y semillas de chía.",
          foto: "/batido-de-fresa.jpeg"
        },
        {
          comida: "Rebanadas de pepino con queso cottage y pimienta negra.",
          foto: "/pepinoyqueso.jpg"
        }
      ]
    },
    {
      titulo: "Carta Para Cena",
      todo: [
        {
          comida: "Tofu salteado con brócoli y champiñones, acompañado de una ensalada verde.",
          foto: "/tofubrocoli.jpg"
        },
        {
          comida: "Pechuga de pavo al horno con batatas asadas y espárragos.",
          foto: "/pechugapavoverdura.jpeg"
        },
        {
          comida: "Sopa de lentejas con verduras y una rebanada de pan integral.",
          foto: "/sopalentejas.jpeg"
        },
        {
          comida: "Pescado al vapor con espárragos y quinoa.",
          foto: "/pescadovapo.jpeg"
        },
        {
          comida: "Pollo a la plancha con puré de coliflor y espinacas salteadas.",
          foto: "/Pollo-con-pure.webp"
        },
        {
          comida: "Hamburguesas de pavo a la parrilla con ensalada de tomate y aguacate.",
          foto: "/hamburguesapavo.jpg"
        },
        {
          comida: "Ensalada de salmón ahumado con aguacate, pepino y aderezo de mostaza y miel.",
          foto: "/ensaladasalmon.jpeg"
        },
        {
          comida: "Curry de garbanzos con espinacas y arroz integral.",
          foto: "/curry-de-verduras-y-garbanzos-receta-vegana.jpg"
        },
        {
          comida: "Brochetas de camarones y vegetales a la parrilla con quinoa.",
          foto: "/brochetas.jpg"
        },
        {
          comida: "Filete de salmón a la parrilla con espárragos y puré de coliflor.",
          foto: "/salmonparrilla.jpeg"
        }
      ]
    }
  ]
  return (
    <div className="w-screen flex-col flex bg-slate-50 gap-12 p-24 h-auto">
      {arr.map((e)=>{
        return(
            <>
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full text-4xl"
          >
            {`${e.titulo}`}
          </motion.h1>
          <motion.div           initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} className="w-full overflow-x-scroll overflow-y-hidden flex-wrap flex-col border-2 border-black rounded-xl p-24 flex h-[50vh]">
            {e.todo.map((comida)=>{
                return(
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} key={comida.foto} className="w-1/2 h-full flex flex-col gap-12 items-center justify-center rounded-xl border-x-2 border-slate-700">
                    <div className="w-96 h-96 rounded-xl bg-cover bg-center" style={{backgroundImage:`url(${comida.foto})`}}>
                    </div>
                    <p className="w-1/2">{`${comida.comida}`}</p>
                </motion.div>
                )
            })}
          </motion.div>
          </>
        )
      })}
    </div>
  );
}
