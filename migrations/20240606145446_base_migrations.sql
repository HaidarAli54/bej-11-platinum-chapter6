-- migrate:up
table users {
  id int [not null]
  username varchar(255) [not null]
  email varchar(100) [not null]
  password varchar(100) [not null]
  updated_at timestamp [default: null]
  created_at timestamp 
  deleted_at timestamp [default: null]
}

table post {
  id int [not null]
  userid int [not null]
  foto image [not null]
  description varchar
  likes varchar
}

Ref: "users"."id" < "post"."userid"

-- migrate:down
DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "post";
