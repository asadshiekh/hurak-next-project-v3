import VerifyCertificate from "@/components/frontend-panel/certificate-checker/page";

const Page = ({params}) => {

  return (
    <div>
    {/* {params.url} */}
      <VerifyCertificate  url ={params.url}/>
    </div>
  );
};

export default Page;
