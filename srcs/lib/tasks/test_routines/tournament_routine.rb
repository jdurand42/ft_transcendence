# frozen_string_literal: true

Tournament.destroy_all

puts 'Enter your nickname?'
name = gets.chomp

you = User.find_by(nickname: name)
trnmt = Tournament.create(start_date: DateTime.now + 1)

TournamentParticipant.create(user: you, tournament: trnmt)
3.times do |t|
  user = User.all[t]
  user.update(status: 'online')
  TournamentParticipant.create(user: user, tournament: trnmt)
end
Tournament.first.update(start_date: DateTime.now)
puts "\nTournament created with #{Tournament.first.participants.count} participants"
