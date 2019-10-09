class ChangeClientsAndClaims < ActiveRecord::Migration[6.0]
  def change
    remove_column :clients, :name
    add_column :clients, :first_name, :string
    add_column :clients, :last_name, :string
    add_column :claims, :time_claimed, :datetime
  end
end
