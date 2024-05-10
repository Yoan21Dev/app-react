import Navbar from "../components/Navbar";
import Footer from "../components/footerComponet";
import imagen from "../img/imagen-back.webp"; // Importa la imagen

import Modal from "../components/ModalComponent";
import React, { useState } from "react";
import typeDB from "../conts/types-db";
import imagenDb from "../img/Gestor-base-de-datos-que-es.png";




const LandingPageView = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState("");

  const [modalTitle, setModalTitle] = useState("");

  const openModalWithContent = (content, title) => {
    setModalContent(content);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <body>
      <Navbar />

      <section id="about-me" className="mt-5 mx-4 lg:mx-20">
        <div className="rounded-lg shadow-md p-4 flex flex-col lg:flex-row lg:gap-10">
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-3xl font-bold mb-5">
              Qué es una Base de Datos
            </h2>
            <p className="text-gray-300 text-xl">
              Una base de datos es una recopilación de datos sistemática y
              almacenada electrónicamente. Puede contener cualquier tipo de
              datos, incluidos palabras, números, imágenes, vídeos y archivos.
              Puede usar un software denominado sistema de administración de
              bases de datos (DBMS) para almacenar, recuperar y editar datos.
            </p>
          </div>

          <div
            style={{ backgroundImage: `url(${imagen})` }}
            className="bg-cover bg-no-repeat bg-center p-4 rounded-lg lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative w-80 h-60 rounded-lg">
              <div className="absolute top-0 inset-x-0 flex items-center justify-center mt-5">
                <p className="px-4 py-2 bg-gray-700 text-white border border-gray-300 rounded-lg shadow text-lg font-semibold">
                  Backend
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center shadow-lg rounded-lg">
                <p className="py-2 bg-blue-600 text-white rounded-lg shadow text-lg font-semibold">
                  Database
                </p>
              </div>

              <div className="absolute rounded-lg bottom-0 inset-x-0 flex items-center justify-center">
                <p className="px-6 py-2 bg-gray-700 text-white border border-gray-300 rounded-lg shadow text-lg font-semibold mb-5">
                  Server
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mx-4 lg:mx-20">
        <h2 className="text-center text-3xl font-bold">
          Tipos de bases de datos
        </h2>
        <div className="rounded-lg shadow-md p-10 flex flex-wrap gap-5">
          {Object.values(typeDB).map((type) => (
            <p
              key={type.title}
              onClick={() => openModalWithContent(type.content, type.title)}
              className={`flex-auto text-center py-2 rounded-lg border border-gray-300 shadow text-lg font-semibold hover:${type.hoverColor}`}
            >
              {type.title}
            </p>
          ))}
        </div>
      </section>

      <section id="manejadores" className="mt-5 mb-10 mx-4 lg:mx-20">
        <div className="rounded-lg shadow-md p-4">
          <div className="relative">
            <div
              style={{ backgroundImage: `url(${imagenDb})`, opacity: 0.7 }}
              className="absolute inset-0 bg-cover bg-no-repeat bg-center p-4 rounded-lg"
            ></div>

            <div className="relative z-10 flex flex-col">
              <h2 className="text-3xl font-bold mb-5">
                Manejadores o gestor de base de datos:
              </h2>
              <p className="text-gray-200 font-xl text-xl">
                Un sistema gestor de base de datos (SGBD) o Database Management
                System (DBMS) reúne el conjunto de programas empleados para
                administrar y gestionar la información presente en una base de
                datos. Estos sirven de interfaz entre la base de datos, las
                aplicaciones y el usuario, permitiendo recuperar la información
                de forma sencilla, rápida y eficiente. Algunas de sus funciones
                son permitir la definición y almacenamiento de la información,
                acceder a los datos y modificarlos, garantizando la seguridad e
                integridad de los mismos. Además, se usan para efectuar análisis
                y generar informes, de la forma más eficiente posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="concepts" className="mt-5 mb-10 mx-4 lg:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-md p-4">
          <div className="text-center font-medium text-xl">Entidad</div>
          <div className="text-wrap mx-auto text-justify">
            En bases de datos, una entidad es la representación de un objeto o
            concepto del mundo real que se describe en una base de datos. Las
            entidades se describen en la estructura de la base de datos
            empleando un modelo de datos.
          </div>
        </div>

        <div className="rounded-lg shadow-md p-4">
          <div className="text-center font-medium text-xl">Relación</div>
          <div className="text-wrap mx-auto text-justify">
            La relación de una base de datos es el vínculo que se establece
            entre distintos elementos de las tablas que la conforman. En este
            tipo de relaciones es fundamental el uso de los campos de llave
            primaria (primary key) que son los que se relacionan con otros
            registros de otras tablas.
          </div>
        </div>

        <div className="rounded-lg shadow-md p-4">
          <div className="text-center font-medium text-xl">Atributo</div>
          <div className="text-wrap mx-auto text-justify">
            Son las características o propiedades que describen a la entidad
            (se encierra en un óvalo). Los atributos se componen de: Los
            atributos compuestos son aquellos que tienen atributos ellos
            mismos. Los atributos llave son aquellos que identifican a la
            entidad y no pueden ser repetidos. Existen: Naturales: son
            inherentes al objeto como el número de serie Clave artificial: no
            es inherente al objeto y se asigna de manera arbitraria.
          </div>
        </div>

        <div className="rounded-lg shadow-md p-4">
          <div className="text-center font-medium text-xl">Cardinalidad</div>
          <div className="text-wrap mx-auto text-justify">
            La cardinalidad de una relación es el número de filas relacionadas
            de cada uno de los objetos en la relación. Las filas se relacionan
            mediante la expresión de la relación; normalmente, esta expresión
            hace referencia a las claves principal y foránea de las tablas
            subyacentes.
          </div>
        </div>
      </div>
    </section>

      <section className="mt-10 mx-4 lg:mx-20">
            <div className="rounded-lg shadow-md p-4 lg:flex-row lg:gap-10">
              <div className="text-center text-3xl font-bold mb-5">
                Que es Modelo E-R "Entidad-relación"
              </div>
              <div>

              El modelo entidad relación es una herramienta que permite representar de manera simplificada los componentes que participan en un proceso de negocio y el modo en el que estos se relacionan entre sí.

              El modelo entidad relación tiene tres elementos principales:
              <ul className="mt-4 list-disc">
                <li>
                Entidades: El modelo contará con una entidad por cada uno de los componentes del proceso de negocio. Así, en un negocio de venta de suscripciones a revistas, podemos tener entidades “Cliente”, “Dirección”, “Factura”, “Producto”, o “Incidencias”, entre otras.
                </li>
                <li>

                Atributos: Los atributos, componente fundamental de cada modelo entidad-relación, nos permiten describir las propiedades que tiene cada entidad. “Nombre”, “Primer Apellido”, “Segundo Apellido”, ”Fecha de nacimiento”, “Género” o “Segmento de valor” serán atributos de la entidad “Cliente”.
                </li>

                <li>
                  Relaciones: Con las relaciones se establecen vínculos entre parejas de entidades. Cada “Cliente” tendrá una “Dirección” de envío en la que recibirá la suscripción, podrá estar suscrito a uno o varios “Productos”, y recibirá una “Factura” con la periodicidad acordada.
                </li>
              </ul>
             


              </div>
          
            </div>

      </section>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div>
          <h1 className="text-lg text-center font-bold mb-2">{modalTitle}</h1>
          <p>{modalContent}</p>
        </div>
      </Modal>
      <Footer></Footer>
    </body>
    
  );
};

export default LandingPageView;
