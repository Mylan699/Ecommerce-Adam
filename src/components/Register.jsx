import loginImg from '../assets/login.jpg'
export const Register = () => {
    return(
        <main className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>Odyssée</h2>
                <div className='flex flex-col py-2'>
                    <label>Nom</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Mot de passe</label>
                    <input className='border p-2' type="password" />
                </div>
                <button className='border w-full my-5 py-2 bg-orange-500 hover:bg-indigo-500 text-white'>Se connecter</button>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" />Se souvenir de moi</p>
                    <p>Créer un compt</p>
                </div>
            </form>
        </div>
    </div>
        </main>
    )
}

export default Register