Chatroom.find_or_create_by!(name: "general")
Chatroom.find_or_create_by!(name: "tokyo")
Chatroom.find_or_create_by!(name: "memes")

trouni = User.find_or_initialize_by(email: "trouni@me.com")
trouni.update!(username: 'trouni', nickname: "Trouni", password: "123123")
doug = User.find_or_initialize_by(email: "doug@me.com")
doug.update!(username: 'dmbf29', nickname: "Doug", password: "123123")