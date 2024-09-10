"use client"
import Input from '../input/Input'
import useRestFormPass from './useRestFormPass'


const RestFormPass = ({token}:{token:string}) => {
     const {
      newPassword,
      enterPassword,
      FaSpinner,
      setReEnterPassword,
      setnewPassword,
      loading,
      handleRestPass
    }=useRestFormPass(token)
  return (
    <>
    <div>
      <Input
        type="password"
        name=''
        disable={false}
        value={newPassword}
        label="New Password"
        onChange={(e) => setnewPassword(e.target.value)}
        placeholder="Enter Password"
      />
    </div>

    <div>
      <Input
        type="password"
        name=''
        disable={false}
        value={enterPassword}
        label="Re-Enter Password"
        onChange={(e) => setReEnterPassword(e.target.value)}
        placeholder="Re-Enter Password"
      />
    </div>

    <button
    onClick={handleRestPass}
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
       <div className="flex justify-center items-center gap-1">
        {loading && <FaSpinner className="animate-spin mr-2" />}
        <h1 className="flex justify-center items-center gap-2"> Reset Password</h1>
      </div>
     
    </button>
  </>
  )
}

export default RestFormPass