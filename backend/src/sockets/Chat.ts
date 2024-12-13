import { Server } from "socket.io";
import Message from "../model/Message";
import WorkingSpace from "../model/WorkingSpace"; 
import Chat from "../model/Chat";

class ChatInstance {
    private io: Server;
    constructor(io: Server<any>) {
        this.io = io;
        this.socketInit();
    }

    private socketInit() {
        this.io.on("connection", (socket) => {
            socket.on("send_message", async (data) => {
                const  {sender, time , spaceId, message} = data;
                // const newMessage = await this.createMessage(message as string, spaceId as string, userId as string, chatId as string);
                // console.log({newMessage});
                console.log({data});
                this.io.to(spaceId).emit("new_message", {sender ,time , message});
            })
        })
    }

    private async createMessage(message: string, spaceId: string, userId: string, chatId: string) {
        try {
            const newMessage = await Message.create({
                content: message,
                space: spaceId,
                sender: userId
            });
            if (newMessage) {
                const myChat = await Chat.findOneAndUpdate(
                    { _id: chatId },
                    { $push: { messages: newMessage._id } },
                    { new: true }
                ).populate("messages");
                return myChat?.messages;
            }
            return;
            // const chatMessages = await Chat.findOne({
            //     _id : chatId
            // }).populate("message");      
        } catch (err) {
            console.log((err as Error).message);
        }
    };

    private async listJoinUser(spaceId: string, userId: string) {
        try {
            const findSpace = await WorkingSpace.findOne({
                _id: spaceId,
                $or: [
                    { members: userId }, // Check if `userId` is in the `members` array
                    { chats: { $elemMatch: { sender: userId } } } // Check if `chats` array contains an object with `sender: userId`
                ]
            }).populate("members", "-password -email -createdAt -updatedAt -__v -position");

            if (findSpace) {
                return findSpace?.members;
            }
            return;
        } catch (err) {
            console.log((err as Error).message);
        }
    }

    private async createChat(userId: string, anotherUserId: string, spaceId: string) {
        try {
            const findChat = await Chat.findOne({
                $and: [
                    { users: userId },
                    { users: anotherUserId }
                ]
            });
            // Populate the users excluding the password field
            if (findChat) {
                return findChat;
            }
            else {
                const newChat = await Chat.create({
                    users: [
                        { _id: userId },
                        { _id: anotherUserId }
                    ],
                    space: spaceId
                });
                await WorkingSpace.findOneAndUpdate(
                    { _id: spaceId }, // Find the document with this `spaceId`
                    { $push: { chats: newChat._id } }, // Push `newChat._id` into the `chats` array
                    { new: true } // Return the updated document
                ).populate("chats");
                return;
            }
        } catch (err) {
            console.log((err as Error).message);
        }
    };

    private async handelAllMessage(chatId: string) {
        const showAllMessage = await Chat.findOne({
            _id: chatId
        }).populate({
            path: "messages",
            select: "-updatedAt",
            populate: {
                path: "sender",
                select: "-password -email -createdAt -updatedAt -__v -position"
            }
        });
        return showAllMessage?.messages
    }

    private async userChats(userId: string, spaceId: string) {
        try {
            const findChats = await Chat.find({
                $and: [
                    { space: spaceId },
                    { users: userId }
                ]
            }).populate({
                path: "users", 
                select: "-password -email -createdAt -updatedAt -__v -position"
            });
            const users:any[] = [];
            findChats.map((chat) => {
                chat.users.map((oneUser:any)=>{
                    if(oneUser._id !== userId){
                        users.push(oneUser);
                    }
                });
            });
            return users;
        } catch (err) {
            console.log((err as Error).message);
        }
    }
}

export default ChatInstance;
