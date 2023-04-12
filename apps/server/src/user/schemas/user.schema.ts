import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
    id: number

  @Prop({ required: true })
    name: string

  @Prop({ required: true })
    userId: number

  @Prop({ required: true })
    username: string

  @Prop({ required: true })
    gender: number

  @Prop()
    avatar: string

  @Prop()
    mobile: string

  @Prop()
    deptId: string

  @Prop()
    roleIds: string[]

  @Prop()
    postIds: string[]
}

export const UserSchema = SchemaFactory.createForClass(User)
