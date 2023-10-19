class Item < ApplicationRecord
    validates :memo, presence: true
end
