import React from 'react'
import BtnCreateAccount from '../components/BtnCreateAccount'
import { NavLink } from 'react-router-dom'

export const FormRegisterUser = () => {
return (
    <>
    <section className="">
    <div className="flex flex-col items-center justify-center px-2 py-12 mx-auto md:h-screen lg:py-0">

        <div className="w-full md:mt-0 mt-27 sm:max-w-md xl:p-0 max-w-100 sm:p-3 border-l-3 ml-1 border-teal-400 rounded-sm shadow-xl/10">
            <div className="p-3 space-y-4 md:space-y-4 sm:p-8">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-gray-700">
                    Create una cuenta
                </h1>
                <form className="max-w-md mx-auto space-y-4 md:space-y-1">
                <div className="relative z-0 w-full mb-2 group">
                    <label for="email" className="block mb-1 text-sm font-medium text-gray-600 text-md text-grey-600">E-mail</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                </div>
                <div class="relative z-0 w-full mb-3 group">
                        <label for="password" className="block mb-1 text-sm font-medium text-gray-600 text-md text-grey-600">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div class="relative z-0 w-full mb-3 group">
                    <label for="confirm-password" className="block mb-1 text-sm font-medium text-gray-600 text-md text-grey-600">Confirmar Contraseña</label>
                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-3 group">
                        <label for="text" className="block mb-1.5 text-sm font-medium text-gray-600 text-md text-grey-600">Nombres</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jon Lorem" required=""/>
                    </div>
                    <div class="relative z-0 w-full mb-1.5 group">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-600 text-md text-grey-600">Apellidos</label>
                        <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lorem Doe" required=""/>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-1.5 group">
                <label for="text" className="block mb-1.5 text-sm font-medium text-gray-600 text-md text-grey-600">Nombre de Empresa</label>
                        <input type="text" name="empresa" id="empresa" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Symplia Facturación" required=""/>
                    </div>
                    <div class="relative z-0 w-full mb-1.5 group">
                        <label for="text" className="block mb-2 text-sm font-medium text-gray-600 text-md text-grey-600">Teléfono</label>
                        <input type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+ 593 012 25 785 11" required=""/>
                    </div>
                    </div>
                        <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label for="terms" className="font-light text-gray-500 dark:text-gray-500">Acepto los <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" required="" >Términos y condiciones</a></label>
                        </div>
                    </div>

                    <BtnCreateAccount />

                    <NavLink to='/'>
                    <p className="flex justify-end gap-2 text-sm font-light text-gray-500 dark:text-gray-600">
                        Ya tienes una cuenta? <a href="#" className="font-medium text-teal-600 hover:underline dark:text-sky-700">Iniciar Sesión aquí</a>
                    </p>
                    </NavLink>
                </form>
            </div>
        </div>
    </div>
    </section>
</>
)
}

export default FormRegisterUser