function RegisterPage () {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center gap-2 ">
                <div className="border-solid border-2 border-[#000000] rounded-[10px] p-5 bg-[#faf3ea]">
                    <div>
                        <span className="text-[36px] text-[#000000] font-[600] text-center block">
                            Đăng nhập
                        </span>
                    </div>
                    <div>
                        <input
                            className="block bg-[#ffffff] w-[528px] h-[50px] border-solid border-[#9f9f9f] border-2 rounded-[10px] my-6 text-[16px]"
                            type="text"
                            placeholder="Full Name"
                        />
                        <input
                            className="block bg-[#ffffff] w-[528px] h-[50px] border-solid border-[#9f9f9f] border-2 rounded-[10px] my-6 text-[16px]"
                            type="number"
                            placeholder="Age"
                        />
                        <div className="flex gap-4">
                            <span className="text-[16px]">Gender</span>
                            <div className="flex">
                                <input type="radio"/>
                                <label>Male</label>
                                <input type="radio"/>
                                <label>Female</label> 
                                <input type="radio"/>
                                <label>Other</label> 
                            </div>    
                        </div>
                        <input
                            className="block bg-[#ffffff] w-[528px] h-[50px] border-solid border-[#9f9f9f] border-2 rounded-[10px] my-6 text-[16px]"
                            type="password"
                            placeholder="User"
                        />
                        <input
                            className="block bg-[#ffffff] w-[528px] h-[50px] border-solid border-[#9f9f9f] border-2 rounded-[10px] my-6 text-[16px]"
                            type="password"
                            placeholder="Confirm Password"
                        />
                        <input
                            className="block bg-[#ffffff] w-[528px] h-[50px] border-solid border-[#9f9f9f] border-2 rounded-[10px] my-6 text-[16px]"
                            type="mail"
                            placeholder="Email"
                        />
                        <input
                            className="block bg-[#ffffff] w-[528px] h-[50px] border-solid border-[#9f9f9f] border-2 rounded-[10px] my-6 text-[16px]"
                            type="number"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#b88e2f] text-[#ffffff] h-[55px] w-[237px] border-solid border-[#b88e2f] border-2 rouder-[10px] my-3">
                            Login
                        </button>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <p>Bạn đã có tài khoản?</p>
                        <a href="#">Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;