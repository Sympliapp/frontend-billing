import { useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

export const ModalScreen = () => {
  const modalTerms = useRef (null);

  return (
    <>
        <button 
        onClick={() => modalTerms.current.showModal()}
        type="button"
        className="inline-block 
        rounded-full 
        bg-neutral-800 
        px-6 pb-2 pt-2.5 
        text-xs font-medium 
        uppercase 
        leading-normal 
        text-neutral-50 
        shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] 
        transition 
        duration-150 
         
        cursor-pointer 
       "
      >
        Modal Light
      </button>
    <div>
    <div>
        <dialog 
        className="m-auto p-8
        rounded-2xl
        bg-gray-200
        w-200
        h-200
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
        ref={modalTerms}>
          <h1 className="text-sky-800 
            text-xl
            flex
            justify-center
            font-medium  
            leading-normal">
              TÉRMINOS Y CONDICIONES DE USO
          </h1>

            <button 
                type="button" 
                className="absolute 
                top-6 end-5 
                text-gray-400 
                bg-transparent 
                hover:bg-gray-200 
                hover:text-gray-900 
                rounded-full text-sm 
                w-9 h-9 ms-auto 
                inline-flex 
                justify-center 
                items-center
                cursor-pointer
                dark:hover:bg-sky-600 
                dark:hover:text-white"
                onClick={() => modalTerms.current.close()}
                >
                <svg className="flex ml-[-2px]" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                    <IoCloseOutline 
                    size={15}
                    />
                </svg>
            </button>
      

            <div class="
            flex
            flex-col
            p-4 
            md:p-5 
            space-y-4 border-t
            text-sm
            scrollable
            dark:border-gray-300">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
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
                w-full
                cursor-pointer"
                onClick={() => modalTerms.current.close()}
                >Aceptar
                </button>

                <button 
                className="
                bg-red-400
                text-white
                w-50 h-10
                rounded-full
                flex items-center
                justify-center
                w-full
                cursor-pointer"
                onClick={() => modalTerms.current.close()}>
                    Cerrar
                </button>
            </div>

        </dialog>
      </div>
    </div>
    </>
  )
}
