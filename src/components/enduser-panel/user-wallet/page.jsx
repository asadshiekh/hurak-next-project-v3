
const Wallet = () => {
    return (
        <div className=' lg:ml-auto md:ml-auto m-auto lg:w-3/5   my-5 px-4  mb-10 pt-2 pb-5'>

            <div className='lg:ml-auto md:ml-auto bg-gray-600 text-white rounded-lg py-5 mt-12 mb-3 px-5'>
                <h2 className="text-xl font-bold pt-2">£0.00</h2>
                <h2 className="text-md pb-2">Available credit</h2>
            </div>
            <div className="mt-3">
                <h1 className="text-lg">All transaction details</h1>
            </div>
            <div className="mt-3 text-center mb-14">
                <p className="text-lg text-gray-500 font-light">No transaction found</p>
            </div>
        </div>
    )
}

export default Wallet;