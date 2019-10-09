class EnableHstore < ActiveRecord::Migration[6.0]
  def self.up
    enable_extension "hstore"
  end
  def self.down
    disable_extension "hstore"
  end
end
