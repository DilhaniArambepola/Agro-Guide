export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    email: string;
    districtName: string;
    role: string;
}

// UserSchema.methods.newAuthToken = async function(){
//     const user  = this
//     const token =  jwt.sign({ _id: user.id.toString() },'thisismynewblog', {expiresIn: "7 days"})
//     user.tokens = user.tokens.concat({ token })
//     await user.save()
//     return token
// }
