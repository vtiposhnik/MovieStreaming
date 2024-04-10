// import { createToken } from '../util/token';
// import bcrypt from 'bcrypt'
// import { Request, Response } from 'express';
// import { User } from '../model/User';

// export const register = async (req: Request, res: Response) => {
//   try {
//     const { username, emailReg, passwordReg, passwordConfirm } = req.body
//     const userExists = await User.findOne({where: {email: emailReg}})
//     if (userExists) {
//       return res.json({message: "User already exists!"})
//     }
//     const user = User.create({
//       name: username,
//       email: emailReg,
//       password: passwordReg
//     }) 
//     res
//       .status(201)
//       .json({ message: "User signed in successfully", success: true, user });

//   } catch (error) {
//     console.error(error);
//   }
// };
