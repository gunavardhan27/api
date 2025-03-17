import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema'; // Assuming you have a User schema

@Schema({ timestamps: true })
export class Chat extends Document {
    @Prop()
    name: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
    members: User[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
