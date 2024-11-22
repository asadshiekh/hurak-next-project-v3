import React from "react";
import CertificateBanner from './CertificateBanner'
import CertificateCredentialForm from './CertificateCredientialForm'
import CertificateData from './CertificateData'
const VerifyCertificate = ({url}) =>{

    return(
        <>
        <CertificateBanner />
        <CertificateCredentialForm />
        {url &&
            <CertificateData />
        }
        </>
    )
}
export default VerifyCertificate;