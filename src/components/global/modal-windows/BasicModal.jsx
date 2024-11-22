//##################################################################################################################################################
//###########################################          Avalible options for Modal window             ###############################################
//##################################################################################################################################################
//##           Props           #           Type           #           Required           #               Description                              ##
//##################################################################################################################################################
//##      isOpen               #          String          #             true             # Set which modal want to open in page                   ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      CloseModal           #          Function        #             true             # Close modal window                                     ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      staticBackdrop       #          Bool            #             false            # Avoide to clode modal on click to backdrop             ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      size                 #          String          #             false            # Default:[md] sm,md,lg,xl,full,custom                   ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      scrollable           #          Bool            #             false            # Scroll modal content Y-axis inside the modal body      ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      heading              #          String          #             false            # Modal window heading                                   ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      headerText           #          String          #             false            # Modal window heading text color                        ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      headerBG             #          String          #             false            # Modal window heading background color                  ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      header               #          Bool            #             false            # Default:[false] Show/Hide Modal window Header          ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      footer               #          Bool            #             false            # Default:[false] Show/Hide Modal window Footer          ##
//##---------------------------#--------------------------#------------------------------#--------------------------------------------------------##
//##      footerContent        #          HTML/JSX        #             false            # Default:empty Use to add Modal window Footer Contnet   ##
//##################################################################################################################################################
//##################################################################################################################################################

//##########################################################################################
//##################        Function for handel open and close modal      ##################
//##########################################################################################
//                                                                                        
//  const [isOpen, setOpen] = useState(null);                                             
//  const CloseModal = () => {                                                            
//      setOpen(null);                                                                    
//      document.body.style.overflowY = 'auto';                                           
//  }                                                                                     
//                                                                                        
//##########################################################################################
//##########################################################################################

//##########################################################################################
//##########################        Component Example          #############################
//##########################################################################################                                                                                        
// 
// <button onClick={() => { setOpen('ModalNameID') }}>Open Modal</button>
// {isOpen == 'ModalNameID' ?
// <BasicModal size={'lg'} isOpen={isOpen} CloseModal={CloseModal}>
//
// </BasicModal>
// : false}                                                                                 
//                                                                                        
//##########################################################################################
//##########################################################################################


"use client";

import { useEffect } from "react";
import { GoX } from "react-icons/go";

const BasicModal = ({ children, isOpen, CloseModal, staticBackdrop, scrollable, size, heading, headerText, headerBG, header, footer, footerContent }) => {

    const BasicModalFooter = ({ children }) => {
        return (
            <div>
                {children}
            </div>
        )
    }

    let modalSize = 'w-full md:w-[500px]';
    if (size == 'sm') {
        modalSize = 'w-full md:w-[300px]';
    } else if (size == 'md') {
        modalSize = 'w-full lg:w-[500px]';
    } else if (size == 'lg') {
        modalSize = 'w-full lg:w-[800px]';
    } else if (size == 'xl') {
        modalSize = 'w-full lg:w-[1140px]';
    } else if (size == 'full') {
        modalSize = 'w-screen';
    } else if (size && size != 'sm' && size != 'md' && size != 'lg' && size != 'xl' && size != 'full') {
        modalSize = size;
    }

    useEffect(() => {
        if (isOpen != null) {
            document.body.style.overflowY = 'hidden';
        }
    }, []);

    return (
        <div onClick={staticBackdrop === true ? (e) => e.stopPropagation() : CloseModal} className={`fixed inset-0 z-50 flex justify-center  ${scrollable === true ? 'overflow-hidden items-center' : 'overflow-auto items-start'}  h-screen w-screen bg-[rgba(0,0,0,0.5)] top-0 left-0`}>
            <div style={scrollable === true ? { maxHeight: 'calc(100% - 2.5rem)' } : { maxHeight: 'auto' }} className={`absolute ${scrollable === true ? 'overflow-hidden' : 'my-8'} rounded bg-white ${modalSize}`} onClick={(e) => e.stopPropagation()}>
                {header === true ?
                    <div className={`flex items-center ${headerBG} justify-between border-b py-3 px-4`}>
                        <h2 className={`text-2xl font-semibold ${headerText}`}>{heading}</h2>
                        <GoX onClick={CloseModal} className={`cursor-pointer ${headerText}`} size={25} />
                    </div>
                    : false
                }
                <div style={scrollable === true ? { maxHeight: 'calc(-9.5rem + 100vh)' } : { maxHeight: 'auto' }} className={`min-h-20 overflow-y-auto overflow-x-hidden`}>
                    {children}
                </div>
                {footer === true ? <BasicModalFooter>{footerContent}</BasicModalFooter> : false}
            </div>
        </div>
    )
}

export default BasicModal;
