import { Injectable } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";

//here service is creating its own dependency
//Auth repository is dependency of authService
//Service cannot work correctly unless it has the repository

@Injectable({})
export class AuthService {

    //-------------------------BAD:
    // authRepository:AuthRepository;
    // constructor(){
    //     this.authRepository = new AuthRepository()
    // }

    //--------------------------BETTER
    // authRepository: AuthRepository;
    // constructor(authRepo: AuthRepository){
    //     this.authRepository = authRepo
    // }

    //---------------------------RE-FACTORED
    constructor(public authRepository: AuthRepository){}


    findOne(id:string){
        return this.authRepository.findOne(id);
    }

    findAll(){
        return this.authRepository.findAll();
    }
    
    create(data:any){
        return this.authRepository.create(data)
    }
}