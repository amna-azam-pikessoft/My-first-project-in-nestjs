import { Injectable } from "@nestjs/common";
import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";

@Injectable({})
export class AuthRepository{
    async findOne(id:string){
        const content = await readFile("users.json","utf-8");
        const users = JSON.parse(content);
        return users[id];
    }

    async findAll(){
        const content = await readFile("users.json","utf-8");
        const users = JSON.parse(content);
        return users;
    }
    
    async create(data:any){
        const content = await readFile("users.json","utf-8");
        const users = JSON.parse(content);

        const id = Math.floor(Math.random() * 999);
        users[id] = data;

        await writeFile("users.json", JSON.stringify(users));
    }
}