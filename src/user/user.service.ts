import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from './schemas/address.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async createUser(): Promise<User> {
        const user = new this.userModel({
            name: 'Mehar',
            address: {
                street: '3b2',
                city: 'Mohali'
            }
        });
        return user.save();
    }

    async findAll(): Promise<User[]>{
        return this.userModel.find().exec();
    }
}
