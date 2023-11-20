import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static targets = ['messages', 'form']
  static values = {
    chatroomId: Number
  }

  connect() {
    this.channel = createConsumer().subscriptions.create(
      // Subscribe to the ChatroomChannel,
      // any key other than `channel` will be accessible in the `chatroom_channel.rb#subscribed`'s params
      { channel: 'ChatroomChannel', id: this.chatroomIdValue },
      // Logic to execute when receiving a message from WS
      { received: (data) => {
        // Insert the message at the end of the messages
        this.messagesTarget.insertAdjacentHTML('beforeEnd', data)
        // Scroll down the messages to the bottom
        this.messagesTarget.scrollTo({ top: this.messagesTarget.scrollHeight })
        
      }}
    )
    console.log('Subscribed to WS')
  }

  disconnect() {
    // When disconnecting the Stimulus controller, we should also disconnect from ActionCable.
    // This prevents the app from receiving messages from a previously subscribed channel.
    this.channel.unsubscribe()
  }

  resetForm(event) {
    event.target.reset()
  }
}
