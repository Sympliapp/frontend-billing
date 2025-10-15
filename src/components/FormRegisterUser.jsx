import { NavLink } from 'react-router-dom'
import { CheckBoxTermins } from '../components/CheckBoxTermins'
import { ModalScreen } from './Modals/ModalScreen'

export const FormRegisterUser = () => {
return (
    <>
    <section className="">
    <div className="flex flex-col items-center justify-center px-2 py-0 mx-auto md:h-screen lg:py-0">

        <div className="w-full md:mt-0 mt-35 sm:max-w-md xl:p-0 max-w-100 sm:p-3 border-l-3 ml-1 border-teal-400 rounded-sm shadow-xl/10">
            <div className="p-2 space-y-4 md:space-y-3 sm:p-3">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-gray-700">
                    Create una cuenta
                </h1>
                <form className="max-w-md mx-auto space-y-4 md:space-y-1">
                <div className="relative w-full mb-3">
                    <label htmlFor="email" 
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
                    required=""/>
                </div>
                <div className="relative w-full mb-3 ">
                    <label htmlFor="password" 
                    className="block mb-1 
                        text-sm 
                        ml-4
                        text-gray-600">
                        Contraseña <span className='text-red-500'>(*)</span>
                    </label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="********" 
                    className="custom_input 
                    input w-full" 
                    required=""/>
                </div>
                <div className="relative w-full mb-3">
                    <label 
                    htmlFor="confirm-password" 
                    className="block mb-1 
                        text-sm 
                        ml-4
                        text-gray-600">
                        Confirmar Contraseña <span className='text-red-500'>(*)</span>
                    </label>
                    <input 
                    type="confirm-password" 
                    name="confirm-password" 
                    id="confirm-password" 
                    placeholder="********" 
                    className="custom_input 
                    input w-full" 
                    required=""/>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative w-full mb-3">
                        <label 
                        htmlFor="nameuser" 
                        className="
                        block 
                        mb-1 
                        text-sm 
                        ml-4 
                        text-gray-600">
                            Nombre <span className='text-red-500'>(*)</span>
                        </label>
                        <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        className="custom_input 
                        input w-full" 
                        placeholder="Jon" 
                        required=""/>
                    </div>
                    <div className="relative w-full mb-2">
                        <label 
                        for="text" 
                        className="block 
                        mb-1 
                        text-sm 
                        ml-4 
                        text-gray-600">
                            Apellido <span className='text-red-500'>(*)</span>
                        </label>
                        <input type="text" 
                        name="lastname" 
                        id="lastname" 
                        className="custom_input 
                        input w-full" 
                        placeholder="Doe" 
                        required=""/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative w-full mb-2">
                        <label 
                        htmlFor="empresa" 
                        className="block 
                        mb-1 
                        text-sm 
                        ml-4 
                        text-gray-600">
                            Empresa <span className='text-red-500'>(*)</span>
                        </label>
                        <input 
                        type="text" 
                        name="empresa" 
                        id="empresa" 
                        className="custom_input 
                        input " 
                        placeholder="Symplia Facturación" 
                        required=""/>
                    </div>
                    <div className="relative w-full">
                        <label for="text" 
                        className="block 
                        mb-1 
                        text-sm 
                        ml-4
                        text-gray-600">
                            Whatsapp <span className='text-red-500'>(*)</span>
                        </label>
                        <input 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        className="custom_input 
                        input" 
                        placeholder="+ 593 012 25 785 11" 
                        required=""
                        />
                    </div>
                </div>


                <div className='flex items-start ml-2 mb-6 mt-2'>
                    <p className='text-sm'>Todos los <span className='text-red-500'>
                        (*) </span> 
                        son requeridos para la creación de tú cuenta.
                    </p>
                </div>

                <CheckBoxTermins />

                <div>
                    <button className='custom_button w-full cursor-pointer'>
                        Crear cuenta
                    </button>
                </div>
                
                    <NavLink to='/'>
                    <p className="
                    flex 
                    justify-end 
                    gap-2 mt-5 
                    text-sm 
                    font-light 
                    text-gray-500 
                    dark:text-gray-600">
                        Ya tienes una cuenta? 
                    <span href="/" 
                    className="font-medium 
                    text-teal-600 
                    hover:underline 
                    dark:text-sky-700">
                        Iniciar Sesión
                    </span>
                    </p>
                    </NavLink>
                </form>

                <ModalScreen />
        
            </div>
        </div>
    </div>
    </section>
</>
)
}


export default FormRegisterUser