/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { User, userSchema } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { read } from 'fs';
import { Model } from 'mongoose';
import { IUser } from 'src/interfaces';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly User: Model<IUser>) { }
    async createUser(userData: CreateUserDto) {
        try {
            const { username, password,email,relation } = userData;
            if (await this.User.findOne({ username })) {
                throw new Error('username already taken');
            }
            const hashedPassword = await hash(password, 10);
            const user = await this.User.create({
                username,
                password: hashedPassword,
                email,
                relation
            });
            return user;
        } catch (e) {
            throw e;
        }
    }

    async loginUser(userData: LoginUserDto) {
        try {
            const { username, password } = userData;
            const user = await this.User.findOne({ username });
            if (!user) {
                throw new Error('Please create an account before logging in');
            }
            const hashedPassword = user.password;
            if (compare(password, hashedPassword)) {
                const token = sign(user.toJSON(), 'avd', { expiresIn: '1hr' });
                return { username, profilePicture: user.profilePicture, token };
            }
            throw new Error('Authentication failed,you entered wrong password');
        } catch (err) {
            throw err;
        }
    }
}
