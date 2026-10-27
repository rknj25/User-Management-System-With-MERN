import user from "../model/user.js";


export const add = async (req, res) => {
    try {
        const { name, email, address } = req.body;

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already taken"
            });
        }

        const newUser = await user.create({
            name,
            email,
            address
        });

        return res.status(201).json({
            message: "User created successfully",
            user: newUser
        });

    } catch (err) {
        return res.status(500).json({
            message: "Error in adding user"
        });
    }
};


export const getUser=async(req,res)=>{
    try{
        const userData=await user.find();
        // return res.json(userData)
        return res.json({message:"data fetched..",userData})
    }
    catch{
        return res.json({message:"No Data fetched"})
    }
}


export const getUserById=async(req,res)=>{
    try{
        const id=req.params.id;
        const extUsr=await user.findById(id)
        // if(!extUsr){
        //     return res.json({message:"user not found"})
        // }
        return res.json({message:"Existing user found",extUsr})
    }
    catch{
        return res.json({message:"error"})
    }
}

export const update=async(req,res)=>{
    try{
         const id=req.params.id;
         const {name,email,address}=req.body;
        const extUsr=await user.findById(id)
    
        const updateUser=await user.findByIdAndUpdate(id,{
            name:name,
            email:email,
            address:address
        })
        return res.json({message:"user updated",updateUser})
    }
    catch{
          return res.json({message:"error"})
    }
}

export const deleteUser=async(req,res)=>{
        try{
                const id=req.params.id;
                const extsUsr=await user.findByIdAndDelete(id)
                return res.json({message:"user Deleted"})
        }
        catch{
             return res.json({message:"error"})
        }
}