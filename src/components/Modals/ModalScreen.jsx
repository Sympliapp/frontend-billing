import { useRef } from "react";


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
        ease-in-out hover:bg-neutral-800 
        cursor-pointer 
       "
      >
        Modal Light
      </button>
    <div>
        <dialog 
        className="m-auto p-8 
        rounded-2xl
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
            <h1>Modal Terminos y Condiciones</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex, 
                iure provident iusto ullam ut numquam dolor similique rerum veniam, 
                alias beatae eos quo debitis laudantium consectetur officia, ipsa ducimus!</p>
            
            <div className="flex flex-col lg:flex-row gap-3">
                <button 
                className="bg-white
                text-sky-800
                w-50 h-10
                rounded-full
                flex items-center
                justify-center
                cursor-pointer
                ">Aceptar
                </button>

                <button 
                className="
                bg-red-400
                text-white
                w-50 h-10
                rounded-full
                flex items-center
                justify-center
                cursor-pointer"
                onClick={() => modalTerms.current.close()}>
                    Cerrar
                </button>
            </div>

        </dialog>
    </div>
    </>
  )
}
