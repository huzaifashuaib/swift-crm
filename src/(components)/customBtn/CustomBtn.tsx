

const CustomBtn = ({text}:{text:string}) => {
  return (
    <div className="px-2 py-[7.5px] border border-btnColor rounded-[3.2px] bg-themeLight flex justify-between items-center hover:bg-btnColor text-btnColor hover:text-themeLight">
        <div className=" text-sm font-semibold">{text}</div>
    </div>
  )
}

export default CustomBtn