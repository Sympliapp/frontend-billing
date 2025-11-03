import React from 'react'

export const ContentPrivacy = () => {
  return (
    <>
    <div className='flex flex-col gap-3 p-0'>
     <h2 className="text-base leading-relaxed dark:text-gray-700">
        Aplicación Web <a className="underline decoration-sky-500">Symplia App</a>. – Sistema de Facturación
        </h2>
        <span className='text-base leading-relaxed dark:text-gray-500'>
         Última actualización: 01 de Noviembre de 2025
        </span>
        <div className='text-base leading-relaxed dark:text-gray-700'>
            Titular: [Nombre o razón social del desarrollador o empresa responsable]
        </div>
        <div className='text-base leading-relaxed dark:text-gray-700'>
            Correo de contacto: <a className="underline decoration-sky-500"> [app.symplia@gmail.com] </a> 
        </div>
        <div className='text-base leading-relaxed dark:text-gray-700'>
            Domicilio: Ambato Provincia de Tungurahua, Ecuador
        </div>

        <div className='flex flex-col gap-3'>
            <h2 className='text-xl text-base leading-relaxed dark:text-gray-500'>Introducción</h2>
            <p className='text-base leading-relaxed dark:text-gray-700'>
                En Symplia respetamos su privacidad y nos comprometemos a proteger los datos personales que usted nos confía 
                al utilizar nuestra plataforma web de facturación.
                Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información, 
                así como los derechos que usted tiene respecto al tratamiento de sus datos personales.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-700'>
                Al registrarse o utilizar nuestros servicios, usted acepta los términos descritos en esta Política.
            </p>
        </div>


        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            01
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
            Información que recopilamos
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               Durante el uso de Symplia, podemos recopilar los siguientes tipos de información:
            </p>

            <p className='flex items-start text-base leading-relaxed dark:text-gray-500 font-bold'>Datos de registro del usuario </p>

            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a)
                        </span> Nombres completos
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b) </span> 
                        Número de identificación (cédula, RUC o RIF)
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Correo electrónico
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(d) </span>  
                        Contraseña (almacenada de forma cifrada)
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(e) </span> 
                        Teléfono de contacto
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(f) </span> 
                         Razón social o Empresa
                    </li>
                </ul>
            </div>

             <p className='flex items-start text-base leading-relaxed dark:text-gray-500 font-bold'>Datos comerciales y fiscales </p>

            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a)
                        </span> Datos de facturación (clientes, montos, número de facturas, retenciones, etc.)
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b) </span> 
                        Información de productos o servicios facturados
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Datos contables necesarios para la gestión fiscal
                    </li>
                </ul>
            </div>

             <p className='flex items-start text-base leading-relaxed dark:text-gray-500 font-bold'> Datos técnicos y de uso </p>

            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a)
                        </span> Dirección IP, tipo de navegador, sistema operativo
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b) </span> 
                        Fecha y hora de acceso
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Actividades dentro de la plataforma (para fines de seguridad y soporte)
                    </li>
                </ul>
            </div>

             <p className='flex items-start text-base leading-relaxed dark:text-gray-500 font-bold'> Información de soporte </p>

            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a)
                        </span> Mensajes o solicitudes enviadas a través de los canales de atención o soporte técnico.
                    </li>
                </ul>
            </div>

        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            02
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
            Finalidad del tratamiento de los datos
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                Los datos personales recopilados serán tratados para las siguientes finalidades:
            </p>
            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(1.)
                        </span> Crear y administrar su cuenta de usuario en la plataforma.
                    </li>
                  <li>
                       <span className='font-semibold text-gray-700'>(2.)
                        </span> Emitir, almacenar y gestionar facturas electrónicas o documentos contables.
                    </li>
                  <li>
                       <span className='font-semibold text-gray-700'>(3.)
                        </span> Cumplir con obligaciones legales y fiscales.
                    </li>
                  <li>
                       <span className='font-semibold text-gray-700'>(4.)
                        </span> Brindar soporte técnico y atención al cliente.
                    </li>
                  <li>
                       <span className='font-semibold text-gray-700'>(5.)
                        </span> Mejorar la experiencia del usuario y optimizar el funcionamiento del sistema.
                    </li>
                  <li>
                       <span className='font-semibold text-gray-700'>(6.)
                        </span> Enviar notificaciones importantes sobre actualizaciones o cambios en los servicios.
                    </li>
                  <li>
                       <span className='font-semibold text-gray-700'>(7.)
                        </span> Enviar (previa autorización) información comercial o promocional relacionada con Symplia.
                    </li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            03
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
            Base legal del tratamiento
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
            El tratamiento de los datos personales se basa en: </p>

            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a) </span> 
                       El consentimiento del usuario, otorgado al registrarse en la plataforma.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b) </span> 
                        El cumplimiento de obligaciones legales o contractuales, relacionadas con la facturación electrónica.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       El interés legítimo del responsable para mejorar la calidad del servicio y garantizar la seguridad del sistema.
                    </li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            04
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
            Conservación de los datos
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                Los datos serán conservados durante el tiempo que el usuario mantenga activa su cuenta o mientras sea necesario para cumplir 
                con las finalidades descritas y las obligaciones fiscales o legales aplicables. Una vez cumplido dicho plazo, los datos podrán 
                ser suspendidos y en un periodo de 6 meses eliminados de la Base de Datos.
            </p>

        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            05
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                Seguridad de la información
            </p>

           <p className='text-base leading-relaxed dark:text-gray-600'>
                Symplia implementa medidas técnicas, administrativas y organizativas adecuadas para garantizar la confidencialidad, 
                integridad y disponibilidad de los datos personales, incluyendo:
            </p>

            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a) </span> 
                       Cifrado de contraseñas y comunicaciones (HTTPS).
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b) </span> 
                        Controles de acceso restringido.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Copias de seguridad seguras.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Auditorías internas periódicas.
                    </li>
                </ul>
            </div>

            <p className='text-base leading-relaxed dark:text-gray-600'>
                Sin embargo, el usuario reconoce que ningún sistema de transmisión o almacenamiento es 100% seguro.
            </p>
        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            06
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                Transferencia internacional de datos
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                Dado que la aplicación se desarrolla en Ecuador pero presta servicios a usuarios en Venezuela, los datos personales 
                podrán ser almacenados o tratados en servidores ubicados en cualquiera de estos países o en terceros países que garanticen 
                niveles adecuados de protección. En ningún caso se transferirán datos a terceros sin el consentimiento expreso del usuario, 
                salvo por requerimiento legal o judicial.
            </p>

        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            07
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                Derechos del usuario
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               El usuario podrá ejercer en cualquier momento sus derechos de:
            </p>
            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a) </span> 
                       Acceso: Conocer los datos personales que tenemos sobre usted.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b) </span> 
                        Rectificación: Solicitar la actualización o corrección de datos inexactos.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Eliminación: Solicitar la supresión de sus datos cuando ya no sean necesarios.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Oposición: Oponerse al uso de sus datos para fines no esenciales.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c) </span> 
                       Portabilidad: Solicitar una copia estructurada de sus datos.
                    </li>
                </ul>
            </div>

            <p className='text-base leading-relaxed dark:text-gray-600'>
               Las solicitudes deberán enviarse al correo de contacto indicado, acompañadas de una identificación válida.
            </p>
        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            08
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                Uso de cookies
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                Symplia utiliza cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico y recordar preferencias.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               El usuario puede configurar su navegador para rechazar las cookies, aunque algunas funciones podrían verse limitadas.
            </p>
        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            09
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                Modificaciones de esta política
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios se notificarán
               a través de la plataforma o correo electrónico y entrarán en vigencia a partir de su publicación.
            </p>

        </div>

        <div className="flex flex-col gap-3 items-start">
            <button className="bg-gray-400 
            w-9 h-9
            rounded-full 
            text-white 
            text-base 
            font-medium 
            leading-relaxed">
            10
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
               Contácto
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                Para cualquier consulta o ejercicio de derechos relacionados con la privacidad, puede comunicarse a traves de estos medios:
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                📧 Correo: <a className="underline decoration-sky-500"> [app.symplia@gmail.com] </a> 
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                🏢 Domicilio: Ambato Provincia de Tungurahua, Ecuador
            </p>
        </div>
</div>
    </>
)}
