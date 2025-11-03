import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ContentPrivacy } from "../ModalPrivacy/ContentPrivacy";

export const ModalPrivacy = () => {
  const modalPolicy = useRef (null);

  return (
    <>
        <button 
        onClick={() => modalPolicy.current.showModal()}
        type="text"
        className="inline-block 
        text-sm font-medium 
        leading-normal 
        text-sky-100
        transition 
        duration-150 
        cursor-pointer">
        Políticas de Privacidad
      </button>
 
    <div className="flex">
        <dialog 
        className="m-auto p-1
        rounded-2xl
        bg-gray-200
        w-200
        h-150
        text-gray-900
        space-y-4
        scale-y-0
        opacity-0
        open:scale-y-100
        open:opacity-100
        transition-all
        transition-discrete
        duration-700
        open:duration-500
        backdrop:bg-gray-800/0
        open:backdrop:bg-gray-900/85
        open:backdrop:backdrop:blur-xs
        open:backdrop:transition-all 
        open:backdrop:transition-discrete
        starting:open:scale-y-0
        starting:open:opacity-0
        "
        ref={modalPolicy}>
          <h1 className="text-sky-800 
            text-3xl md:text-3xl
            flex flex-wrap
            text-wrap p-3
            justify-center
            font-medium  
            leading-normal">
             📄 Políticas de Privacidad
          </h1>

          <button 
              type="button" 
              className="absolute 
              top-3.5 end-3 
              md:top-4 md:end-4
              text-gray-400
              bg-transparent 
              hover:bg-gray-200 
              hover:text-gray-900 
              rounded-full text-sm 
              md:w-8 md:h-8
              w-7 h-7 ms-auto 
              inline-flex 
              justify-center 
              items-center
              cursor-pointer
              dark:hover:bg-sky-600 
              dark:hover:text-white"
              onClick={() => modalPolicy.current.close()}
              >
              <svg className="flex ml-[-2px]" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                  <IoCloseOutline 
                  size={15}
                  />
              </svg>
            </button>
      
            
            <div className="flex
              flex-col
              p-4 
              md:p-5 
              space-y-4 border-t
              text-sm
              scrollable
              dark:border-gray-300">
               <ContentPrivacy />
            </div>
        
              <div className="flex flex-col md:flex-row
              items-center 
              p-2 md:p-4
              border-t gap-5
              dark:border-gray-300">
              
                <button 
                className="bg-white
                text-sky-800
                w-50 h-10
                rounded-full
                flex items-center
                justify-center
                hover:bg-sky-700
                hover:text-sky-50
                w-full
                cursor-pointer"
                onClick={() => modalPolicy.current.close()}
                >Aceptar
                </button>

                <button 
                className="
                bg-red-500
                text-white
                w-50 h-10
                hover:bg-red-700
                hover:text-sky-50
                rounded-full
                flex items-center
                justify-center
                w-full
                cursor-pointer"
                onClick={() => modalPolicy.current.close()}>
                    Cerrar
                </button>
            </div>

        </dialog>
      </div>

    </>
  )
}
