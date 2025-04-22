/*import { model, Model, Schema } from 'mongoose'
export const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePicture: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })


export const User = model('User', userSchema)*/

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { relations } from 'src/interfaces';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ default: '' })
  profilePicture: string;

  @Prop({required:true})
  email: string;

  @Prop({required:true, default:relations.OTHER,enum:relations})
  relation:string;

  @Prop({ required: true })
  password: string;
}

export const userSchema = SchemaFactory.createForClass(User);
