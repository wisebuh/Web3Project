import { AiFillPlayCircle } from "react-icons/ai"
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs"
import { Loader } from "./"

export default function Welcome() {
  const commonStyles = 'min-h-[70px] px-4 sm:min-w-[120px] flex justify-center items-center border border-white/10 text-white text-sm backdrop-blur-sm bg-white/5'
  interface InputProps {
    placeholder: string;
    name: string;
    type?: string;
    value:string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input = ({ placeholder, name, type = "text",value, handleChange }: InputProps) => {
    return (
      <input 
        placeholder={placeholder}
        type={type}
        step="0.0001"
        name={name}
        value={value}
        onChange={handleChange}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      />
    );
  }

  const connectWallet = () => {
    // TODO: Add wallet connection logic
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Handle input changes
    console.log(e.target.name, e.target.value);
  }

  const handleSubmit = ()=>{

  }
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12">
            Explore the crypto world. Buy and Sell cryptocurrencies easily on Krypto!
          </p>
          <button 
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-base font-semibold" 
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web3.0</div>
            <div className={commonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
              </div>
            </div>
          </div>
          
          <div className="p-2 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" handleChange={handleChange} value=""/>
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}value="" />
            <Input placeholder="Keyword (Gif)" name="keyword" handleChange={handleChange} value=""/>
            <Input placeholder="Enter Message" name="message" handleChange={handleChange} value=""/>
            <div className="h-[px] w-full bg-gray-400 my-2"/>
              {!true?(
                <Loader />
              ):(
                <button
  type="button" 
  className="text-white w-full mt-2 border border-[#727b92] p-2 rounded-full cursor-pointer hover:border-[#2952e3] hover:bg-[#2952e3]/10 transition-all" 
  onClick={handleSubmit}
>
  Send Now
</button>
              )}
            
          </div>
        </div>
      </div>
    </div>
  )
}