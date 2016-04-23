class AddUserToTraps < ActiveRecord::Migration
  def change
    add_reference :traps, :user, index: true, foreign_key: true
  end
end
