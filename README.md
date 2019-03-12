# DB設計

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

### Index
- user_id
- group_id


## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
その他Deviseで作成されるカラム

### Association
- has_many :messages
- has_many :groups, through: :members
- has_many :members

### Index
- name

### Unique
- name


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users, through: :members
- has_many :members


## memberテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreigh_key: true|
|group_id|integer|null: false, foreigh_key: true|

### Association
- belongs_to :user
- belongs_to :group

### Index
- user_id
- group_id
