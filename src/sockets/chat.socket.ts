import { Server, Socket } from 'socket.io';
import { prisma } from '../config/prisma';

export const setupChatSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    socket.on('join_placement_room', (placementId: string) => {
      socket.join(`placement_${placementId}`);
    });

    socket.on(
      'send_message',
      async (data: {
        placementId: string;
        senderId: string;
        senderRole: 'STUDENT' | 'IND_SUPERVISOR' | 'INST_COORDINATOR' | 'ITF_OFFICIAL' | 'ADMIN';
        senderName: string;
        content: string;
      }) => {
        try {
          const newMessage = await prisma.chatMessage.create({
            data: {
              placement_id: data.placementId,
              sender_id: data.senderId,
              sender_role: data.senderRole,
              sender_name: data.senderName,
              content: data.content,
            },
          });

          io.to(`placement_${data.placementId}`).emit('receive_message', newMessage);
        } catch (err) {
          socket.emit('chat_error', 'Failed to transmit message');
        }
      }
    );

    socket.on('disconnect', () => {});
  });
};