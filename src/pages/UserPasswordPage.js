function UserPasswordPage() {
    return (
        <div>
            <div>
                <div className="flex flex-col items-center">
                    <span className="text-[36px] text-[#000000] font-600">Create New Password</span>
                    <div>
                        <div className="flex flex-col my-4">
                            <label className="text-[16px] text-[#000000] font-500">New Password</label>
                            <input
                                className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px] text-[16px] text-[#9f9f9f] font-[400]"
                                placeholder="Must be at least 8 characters."
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label className="text-[16px] text-[#000000] font-500">Confirm Password</label>
                            <input
                                className="border-[1px] border-solid border-[#9f9f9f] rounded-[10px] w-[453px] h-[45px] text-[16px] text-[#9f9f9f] font-[400]"
                                placeholder="Both password must match."
                            />
                        </div>
                    </div>
                    <div className="flex justify-center border-t-2">
                        <button className="border-[1px] border-solid border-[#000000] w-[318px] h-[64px] rounded-[15px] text-[20px] text-[#000000] font-[400] my-[40px]">Setup Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPasswordPage;
