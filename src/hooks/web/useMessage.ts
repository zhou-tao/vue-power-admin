import { message as Message } from 'ant-design-vue'

Message.config({
  top: '30px',
  duration: 2
})

export enum MessageKey {
  LOADING_KEY = 'LOADING_KEY'
}

export const useMessage = () => ({
  createMessage: Message
})
