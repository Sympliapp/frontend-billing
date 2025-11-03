import { ModalLicense } from "../Modals/License/ModalLicense"
import { ModalPrivacy } from "../Modals/ModalPrivacy/ModalPrivacy"
import { ModalContacto } from '../Modals/Contacto/ModalContacto'

export const FooterScreen = () => {
  return (
<>
<footer className="fixed 
  bottom-0 
  left-0 
  z-20 
  w-full 
  p-4 
  bg-white 
  border-t 
  border-gray-200 
  shadow-sm 
  md:flex 
  md:items-center 
  md:justify-between 
  md:p-6 
  dark:bg-slate-950/92 
  dark:border-slate-500">
    <span class="text-md text-gray-500 sm:text-center dark:text-gray-300">© 2025 Symplia ™ . Todos los Derechos Reservados
    </span>
    <ul className="flex flex-col items-start xl:flex-row gap-4 items-center mt-8 text-md font-medium text-gray-500 dark:text-gray-300 sm:mt-0">
        <li>
            <span> |  <ModalPrivacy /> </span>    
        </li>
        <li>
            <span> |  <ModalLicense /> </span> 
        </li>
        <li>
          <span> |  <ModalContacto /> </span>
        </li>
    </ul>
</footer>
</>
  )
}


