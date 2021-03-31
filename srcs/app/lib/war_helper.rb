# frozen_string_literal: true

module WarHelper
  def war_opened_side_help(guild_a, guild_b)
    War.where(from: guild_a, on: guild_b, opened: true).or(War.where(from: guild_b, on: guild_a, opened: true)).first
  end

  def start_war(war)
    war.update!(terms_agreed: true)
    WarOpenerJob.set(wait_until: war.war_start).perform_later(war)
    WarCloserJob.set(wait_until: war.war_end).perform_later(war)
  end

  def wars_entangled?(war, from, on)
    (from.wars + on.wars).uniq.without(war).filter { |i| i.terms_agreed == true }.each do |t|
      return true if war.war_start.between?(t.war_start, t.war_end)
      return true if war.war_end.between?(t.war_start, t.war_end)
    end
    false
  end

  def times_entangled?(war)
    war.war_times.each do |t|
      return true if time_params_create[:date_start].between?(t.date_start, t.date_end)
      return true if time_params_create[:date_end].between?(t.date_start, t.date_end)
    end
    false
  end

  def war_time_out_of_war_period?(war)
    return true unless time_params_create[:date_start].between?(war.war_start, war.war_end)
    return true unless time_params_create[:date_end].between?(war.war_start, war.war_end)

    false
  end

  def war_times_inside_war_period?(war)
    war.war_times.each do |t|
      return false unless t.date_start.between?(war.war_start, war.war_end)
      return false unless t.date_end.between?(war.war_start, war.war_end)
    end
    true
  end

  def turn_to_negotiate?(war)
    return false if war.last_negotiation == current_user.guild.id

    war.last_negotiation = current_user.guild.id
  end
end
