import { GoArrowLeft } from "react-icons/go";
import Image from 'next/image';
import Link from 'next/link';

const ProviderPolicyHeader = () =>{
    return(
        <div className="shadow-xl">

            <div className='ml-16 lg:ml-auto md:ml-auto m-auto lg:w-3/5 md:w-3/4 w-3/4 py-5 px-4  rounded-tl-lg  mb-10'>
                <div className="flex justify-between items-center">
                <div><Link href="/"><GoArrowLeft  className="text-2xl text-gray-600"/></Link></div>
                <div>
                <Link className="cursor-pointer" href="/">
                <Image 
              src="/images/hurak-logo.webp"
              alt="Upskill your team with Hurak Business" 
              layout="" 
              width={60} 
              height={20} 
              loading="lazy" />
          </Link>
                </div>
                <div>

                </div>

                </div>          
            </div>
        </div>
    )
} 

export default ProviderPolicyHeader;