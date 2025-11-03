import React from 'react'

export const ContentContact = () => {
  return (
    <>
    <div className="max-w-6xl max-lg:max-w-3xl mx-auto">
      <div className="text-start px-4">
        <p className="text-basic text-slate-600">
        ¿Tienes preguntas o necesitas ayuda? ¡Estamos aquí para ayudarte! Ponte en contacto con nuestro 
        equipo para obtener asistencia, resolver dudas o explorar oportunidades de colaboración.</p>
      </div>

      <div className="grid lg:grid-cols-5 items-center p-2 rounded-lg mt-7">
        <div className="lg:col-span-2 
        bg-gray-900 
        rounded-lg 
        p-6 
        h-full 
        max-lg:order-1 
        relative 
        overflow-hidden 
        max-lg:mt-12">
          <h3 className="text-2xl text-white font-medium">Información</h3>
          <p className="text-md text-slate-300 leading-relaxed mt-4"> 
            ¿Tiene alguna pregunta específica? Nuestro equipo de expertos está listo para ayudarle.</p>
          <div className="mt-5 relative z-50">
            <ul className="space-y-5">
              <li className="flex items-center text-slate-200 hover:text-white">
                <a href="javascript:void(0)" className="text-[15px]">
                  app.symplia@gmail.com
                </a>
              </li>
              <li className="flex items-center text-slate-200 hover:text-white">
                <a href="javascript:void(0)" className="text-md">
                  +593 98 13 750 88
                </a>
              </li>
              <li className="flex items-center text-slate-200 hover:text-white">
                <a href="javascript:void(0)" className="text-[15px]">
                  Ambato Provincia de Tungurahua, Ecuador
                </a>
              </li>
            </ul>

            <ul className="flex flex-wrap mt-10 cursor-pointer">
              <li className="bg-slate-200 hover:bg-white h-9 w-35 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg className="w-[25px] h-[25px] fill-slate-900"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                    </path>
                  </svg>
                </a>
                <p className=''>Instagram</p>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-teal-500"></div>
        </div>

        <div className="px-0 sm:px-8 py-3 lg:col-span-3">
          <form>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative flex items-center">
                <div className="relative w-full">
                    <label 
                    htmlFor="nameuser" 
                    className="
                    block 
                    mb-1 
                    text-sm 
                    ml-4 
                    text-gray-600">
                        Nombres <span className='text-red-500'>(*)</span>
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="custom_input 
                    input w-full" 
                    placeholder="Jon" 
                    required />
                </div>
                
              </div>
              <div className="relative flex items-center">
                <div className="relative w-full ">
                    <label 
                    htmlFor="text" 
                    className="block 
                    mb-1 
                    text-sm 
                    ml-4 
                    text-gray-600">
                        Apellidos <span className='text-red-500'>(*)</span>
                    </label>
                    <input type="text" 
                    name="lastname" 
                    id="lastname" 
                    className="custom_input 
                    input w-full" 
                    placeholder="Doe" 
                    required />
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="relative w-full">
                    <label 
                    htmlFor="text" 
                    className="block 
                    mb-1 
                    text-sm 
                    ml-4
                    text-gray-600">
                        Whatsapp <span className='text-red-500'>(*)</span>
                    </label>
                    <input 
                    type="number" 
                    name="phone" 
                    id="phone" 
                    className="custom_input 
                    input" 
                    placeholder="+ 593 012 25 785 11" 
                    required />
                </div>
              </div>
              <div className="relative flex items-center">
                <div className="relative w-full">
                    <label 
                    htmlFor="email" 
                    className="block mb-1 
                        text-sm 
                        ml-4 
                        text-gray-600">
                        Correo Electrónico <span className='text-red-500'>(*)</span>
                    </label>
                    <input 
                    type="email" 
                    name="emailuser" 
                    id="emailuser" 
                    className="custom_input 
                    input w-full" 
                    placeholder="name@sympliapp.com" 
                    required />
                </div>

              </div>
              <div className="relative  items-center col-span-full">
                  <label 
                  htmlFor="email" 
                  className="block mb-1 
                      text-sm 
                      ml-4 
                      text-gray-600">
                      Mensaje <span className='text-red-500'>(*)</span>
                  </label>
                <textarea placeholder="Escribir Mensaje"
                  className="px-2 pt-3 
                  bg-white 
                  w-full 
                  text-sm 
                  text-slate-900 
                  border-b 
                  border-gray-300 
                  focus:border-slate-900 
                  outline-none
                  custom_input 
                  input
                  ">
                </textarea>
              </div>
            </div>

            <button type="button"
              className="mt-6 
              flex w-full
              items-center 
              justify-center 
              text-sm 
              font-medium 
              lg:ml-auto 
              max-lg:w-full 
              rounded-lg 
              px-4 py-3 
              tracking-wide 
              cursor-pointer 
              text-white 
              bg-sky-600 
              hover:bg-sky-800">
              Enviar Mensaje
            </button>

          </form>
        </div>
      </div>
    </div>
</>
)}
