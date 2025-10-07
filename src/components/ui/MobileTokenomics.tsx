

const MobileTokenomics = () => {
   type TiokenomicDetails = {
    Number:string ;
    description:string;
 };
    const TokenomicsData: TiokenomicDetails[]=[
       { Number:"01",
        description:"35% Development"},

        { Number:"02",
        description:"10% Community Rewards"},

        { Number:"03",
        description:"20% Public Sale"},

        { Number:"04",
        description:"15% Team & Advisors"},

        { Number:"05",
        description:"10% Marketing"},

        { Number:"06",
        description:"10% Reserve"},
    ]
  return (
<div className="flex lg:hidden flex-col gap-[16px] mt-[57px]  max-w-[398px] mx-auto justify-center">
    {TokenomicsData.map((data,index)=>(
<div key={index} className="flex justify-start  items-center gap-[16px]  py-[4px] ">
    <div className="bg-white rounded-full px-[10px] text-center items-center">
        <h1 className="text-[16px] font-bold leading-[37px] font-lora  text-black">{data.Number}</h1></div>
        <p className="font-sans font-normal text-[18px] leading-[24px]   ">{data.description}</p>
    </div>
    ))}
    </div>
  );
};

export default MobileTokenomics