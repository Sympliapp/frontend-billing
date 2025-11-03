import React from 'react'

export const ContentModals = () => {
  return (
    <>
     <h2 className="text-base leading-relaxed dark:text-gray-700">
        Aplicación Web de Facturación “Symplia”
        </h2>
        <span className='text-base leading-relaxed dark:text-gray-500'>
        Última actualización: [21/10/2025]
        </span>
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
            ACEPTACIÓN DE LOS TÉRMINOS
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                El presente documento establece los Términos y Condiciones de Uso que rigen el acceso 
                y utilización del sistema web Symplia, propiedad de 
                [Nombre de la empresa desarrolladora], con domicilio en [Ciudad, Ecuador], en adelante “EL PROVEEDOR”.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                Al crear una cuenta, acceder o utilizar la plataforma Symplia, el usuario (en adelante “EL USUARIO”) 
                acepta expresamente los presentes términos y condiciones, así como la Política de Privacidad correspondiente.
                Si EL USUARIO no está de acuerdo con alguno de estos términos, deberá abstenerse de usar el servicio.
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
            02
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
            DESCRIPCIÓN DEL SERVICIO
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                Symplia es una aplicación web de facturación electrónica que permite emitir, 
                administrar y almacenar comprobantes digitales, gestionar clientes, proveedores y reportes de ventas.
                EL PROVEEDOR podrá actualizar, modificar o ampliar las funcionalidades de la plataforma en cualquier momento, 
                notificando a los usuarios cuando sea necesario.
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
            03
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
            REGISTRO DE USUARIOS
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
            Para acceder a las funcionalidades de Symplia, EL USUARIO debe 
            registrarse proporcionando información veraz, actual y completa, 
            incluyendo su nombre, correo electrónico, identificación fiscal 
            y datos de facturación.</p>

            <p className='flex items-start text-base leading-relaxed dark:text-gray-600 font-bold'>EL USUARIO será responsable:</p>

            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a)</span> Mantener la confidencialidad de sus credenciales de acceso.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b)</span> Notificar de inmediato cualquier uso no autorizado de su cuenta.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c)</span> Garantizar que los datos ingresados sean correctos y estén actualizados.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(d)</span> EL PROVEEDOR se reserva el derecho de suspender o cancelar cuentas que presenten uso indebido, 
                        falsificación de información o incumplimiento de estos términos.
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
            LICENCIA DE USO
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                EL PROVEEDOR concede a EL USUARIO una licencia de uso limitada, 
                no exclusiva, intransferible y revocable para acceder y utilizar 
                Symplia conforme a estos Términos y Condiciones.
            </p>
            <p className='flex items-start text-base leading-relaxed dark:text-gray-600 font-bold'>EL USUARIO no podrá:</p>
            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a)
                        </span> Copiar, modificar, descompilar, distribuir o vender el software.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b)
                        </span> Usar Symplia con fines ilícitos o contrarios a las leyes fiscales aplicables.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c)
                        </span> Realizar ingeniería inversa o intentar acceder al código fuente.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(d)
                        </span> Cualquier uso no autorizado podrá dar lugar a la suspensión inmediata de la cuenta y a acciones legales.
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
            05
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                PLANES, PAGOS Y RENOVACIONES
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                El acceso a Symplia podrá ofrecerse mediante distintos planes membresia o un unico pago ('Siendo este con algunas clausulas distintas
                al resto de planes').
                Las condiciones económicas de cada plan (tarifas, límites de uso, renovación y cancelación) 
                estarán disponibles en una sección de información.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                Los pagos efectuados por suscripción no son reembolsables, salvo disposición expresa de la ley 
                o fallo comprobable atribuible al servicio.
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
                SOPORTE Y DISPONIBILIDAD
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                EL PROVEEDOR se compromete a mantener la disponibilidad de la plataforma y a brindar soporte técnico
                 a los usuarios conforme al plan contratado. El soporte podrá ofrecerse vía correo electrónico, chat 
                 o ticket en horario laboral.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
                EL PROVEEDOR no garantiza disponibilidad ininterrumpida del servicio, pero realizará esfuerzos razonables 
                para resolver incidencias técnicas en el menor tiempo posible.
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
                PROPIEDAD INTELECTUAL
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                Todos los derechos sobre el software, el diseño, los textos, las marcas y los logotipos de Symplia pertenecen a 
                [Nombre de la empresa desarrolladora].

            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               El uso del sistema no implica transferencia alguna de propiedad intelectual al usuario.
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
                CONFIDENCIALIDAD Y PROTECCIÓN DE DATOS
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                EL PROVEEDOR se compromete a proteger la información del USUARIO conforme a la legislación ecuatoriana y venezolana 
                sobre protección de datos personales. Los datos del usuario se utilizarán exclusivamente para la prestación del servicio 
                y no serán compartidos con terceros sin consentimiento previo, salvo obligación legal.

            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               Se recomienda revisar la Política de Privacidad completa disponible.
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
                RESPONSABILIDAD
            </p>
            <p className='flex items-start text-base leading-relaxed dark:text-gray-600 font-bold'>EL PROVEEDOR no será responsable por:</p>
            <div className='text-base leading-relaxed dark:text-gray-600'>
                <ul className='flex flex-col space-y-3'>
                    <li>
                       <span className='font-semibold text-gray-700'>(a)
                        </span> Errores u omisiones en los datos ingresados por el usuario.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(b)
                        </span> Daños indirectos, pérdida de información o interrupciones causadas por terceros o por causas de fuerza mayor.
                    </li>
                    <li>
                       <span className='font-semibold text-gray-700'>(c)
                        </span> Cumplimiento fiscal del usuario ante las autoridades tributarias.
                    </li>
                    <li>
                        <span className='font-semibold text-gray-700'>(d)
                        </span> EL USUARIO es el único responsable de la validez legal y fiscal de las facturas emitidas a través de Symplia.
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
            10
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                MODIFICACIONES DE LOS TÉRMINOS
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                EL PROVEEDOR podrá modificar estos Términos y Condiciones en cualquier momento.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                Las modificaciones serán notificadas por los medios habituales de comunicación o publicadas en el sitio web oficial.
                El uso continuado de la plataforma implica aceptación de las nuevas condiciones.
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
            11
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                TERMINACIÓN DEL SERVICIO
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                EL USUARIO podrá cancelar su cuenta en cualquier momento.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               EL PROVEEDOR podrá suspender o cancelar cuentas que infrinjan los presentes Términos, 
               que generen riesgo operativo, o que realicen actividades fraudulentas o ilícitas.
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
            12
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                LEY APLICABLE Y JURISDICCIÓN
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                Los presentes Términos se regirán por las leyes de la República del Ecuador, sin perjuicio de la posibilidad 
                de que EL USUARIO opere desde otro país.
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>
               Cualquier controversia será resuelta por los tribunales competentes de Quito, Ecuador.
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
            13
            </button>
            <p className='text-base leading-relaxed dark:text-gray-600 font-bold'>
                CONTACTO - Soporte Symplia
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                Para consultas, reclamos o soporte técnico, EL USUARIO puede comunicarse con:
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                📧 Correo: <a className="underline decoration-sky-500"> [app.symplia@gmail.com] </a> 
            </p>
            <p className='text-base leading-relaxed dark:text-gray-600'>         
                🏢 Domicilio: Ambato Provincia de Tungurahua, Ecuador
            </p>
        </div>
    </>
)}
