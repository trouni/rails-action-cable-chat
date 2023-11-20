class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # We need to connect to a stream, which is identified by a unique string
    # stream_from "general"

    chatroom = Chatroom.find(params[:id])
    # we can use `stream_for` to connect to an instance
    # (ActionCable will automatically generate a unique string for that instance)
    stream_for(chatroom)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
