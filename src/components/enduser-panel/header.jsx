
const Header = ({ breadcrum, headerText }) => {
    return (
<div className='text-white py-12 mb-10' style={{ backgroundColor: "#505763" }}>
<div className=' lg:m-auto lg:p-0 pl-6 w-3/5'>
{breadcrum != null ? <p className="text-lg">{breadcrum}</p> : false}
<p className="ld:text-3xl md:text-3xl text-2xl font-semibold">{headerText}</p>
</div>
</div>

    )};

    export default Header;