import { Controller, Post, Get, Body, Param, NotFoundException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dtos/create-user.dto";

@Controller('auth')
export class AuthController {

    constructor(public authService:AuthService){}

    @Post('create')
    createUser(@Body() body:CreateUserDto){
        return this.authService.create(body)
    }

    @Get('findAll')
    listAllUsers(){
        return this.authService.findAll()
    }

    @Get('/:id')
    async GetOneUser(@Param('id') id:string){
        const foundUser = await this.authService.findOne(id);
        if(!foundUser)
            throw new NotFoundException('User not found with this ID');
        return foundUser
    }
}