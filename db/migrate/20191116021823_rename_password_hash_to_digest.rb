class RenamePasswordHashToDigest < ActiveRecord::Migration[6.0]
  def change
    rename_column :donors, :password_hash, :password_digest
  end
end
