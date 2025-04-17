import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import { User } from './user.schema';
import { Chat } from './chat.schema';

@Schema({ timestamps: true })
export class Messages {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  sender: User;

  @Prop({ type: Types.ObjectId, ref: 'Chat' })
  chat: Chat;

  @Prop({ required: true })
  message: string;
}
