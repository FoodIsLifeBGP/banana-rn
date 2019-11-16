class RenamePasswordHashInClients < ActiveRecord::Migration[6.0]
  def change
    rename_column :clients, :password_hash, :password_digest
  end
end
