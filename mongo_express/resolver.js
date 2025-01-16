const User=require("./models/User");

const root={
    users:async ()=>{
        return await User.find();
    },
    user:async ({id})=>{
        return await User.findById(id);
    },
    userByName:async({name})=>{
        return await User.find({
            name:name
        });
    },
    userBelowSalary:async({salary})=>{
        return await User.find({
            salary:{
                $lt:salary
            }
        })
    },
    addUser:async({input})=>{
        console.log("Input received:", input);
        console.log("Input received:", input.name);
        const user=new User({
            name:input.name,
            salary:input.salary
        });
        user.save();
        return user;
    },
    deleteUser:async({id})=>{
        await User.findByIdAndDelete(id);
        return true;
    }
}
module.exports=root;