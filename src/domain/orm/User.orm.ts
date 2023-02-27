import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "@/utils/loggers";

//CRUD

/*
*Method to obtain all users from collection "User" in Mongo Server
*/

export const GetAllUsers = async () =>{
    try {
        let userModel = userEntity();
        // Search all users
        return await userModel.find({isDelete: false})
    } catch (error) {
        LogError(`[ORM ERROR]: Geting All Users: ${error}`)
    }
}

// TODO
// Get users By ID
// Get users By email
// Deleted user
// Create new User
// Update User by ID