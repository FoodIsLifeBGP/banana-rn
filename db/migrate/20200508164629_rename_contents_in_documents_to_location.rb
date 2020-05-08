class RenameContentsInDocumentsToLocation < ActiveRecord::Migration[6.0]
  def change
      rename_column :documents, :contents, :location
  end
end
