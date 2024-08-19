import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";


const DocumentBtn = () => {
  return (
    <div>
        <div className="flex justify-end gap-[13.28px]">
        <div>
          <div className="px-[9.96px] py-[4.98px] border border-btnColor rounded-[3.32px] bg-btnColor flex justify-between items-center cursor-pointer">
            <div className="text-white text-[13.28px] font-semibold flex items-center gap-[6.64px]">
              <div>
              <MdOutlineAddBox />
              </div>
              <div>
              Create Document
              </div>
              </div>
          </div>
        </div>
        <div>
        <div className="px-[9.96px] py-[4.98px] border border-btnColor rounded-[3.32px] bg-btnColor flex justify-between items-center cursor-pointer">
            <div className="text-white text-[13.28px] font-semibold flex items-center gap-[6.64px]">
              <div>
              <MdOutlineFileUpload />
              </div>
              <div>
             Upload
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentBtn