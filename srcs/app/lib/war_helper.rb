# frozen_string_literal: true

module WarHelper
  def war_opened(guild_a, guild_b)
    War.where(from: guild_a, on: guild_b, opened: true).or(War.where(from: guild_b, on: guild_a, opened: true)).first
  end

  def wars_entangled?(war, from, on)
    (from.wars + on.wars).uniq.without(war).filter { |i| i.terms_agreed == true }.each do |t|
      return true if war.war_start.between?(t.war_start, t.war_end)
      return true if war.war_end.between?(t.war_start, t.war_end)
    end
    false
  end

  def war_time_entangled?(war)
    war.war_times.each do |t|
      return true if start_hour_entangled?(t)
      return true if end_hour_entangled?(t)
    end
    false
  end

  def start_hour_entangled?(war_time)
    return unless time_params_create[:day].casecmp(war_time.day).zero?
    return if time_params_create[:start_hour].to_i == war_time.end_hour

    time_params_create[:start_hour].to_i.between?(war_time.start_hour, war_time.end_hour)
  end

  def end_hour_entangled?(war_time)
    return unless time_params_create[:day].casecmp(war_time.day).zero?
    return if time_params_create[:end_hour].to_i == war_time.start_hour

    time_params_create[:end_hour].to_i.between?(war_time.start_hour, war_time.end_hour)
  end

  def turn_to_negotiate?(war)
    return false if war.last_negotiation == current_user.guild.id

    war.last_negotiation = current_user.guild.id
  end

  def running_war_time(war)
    war&.war_times&.each do |t|
      return t if t.day.casecmp(DateTime.now.in_time_zone('Europe/Paris').strftime('%A')).zero?\
      && Time.now.in_time_zone('Europe/Paris').hour.between?(t.start_hour, t.end_hour)
    end
    false
  end
end
