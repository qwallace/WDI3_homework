     
require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

# Homepage

get '/' do

  sql = 'SELECT * FROM videos;'

  @videos = run_sql(sql) # always going to be a collection

  erb :index
end

# Add new video form

get '/videos/new' do

  erb :new

end

# Adds new video to DB

post '/videos' do

  video_url = params[:video_url]
  video_id = video_url.split('=').last
  sql = "INSERT INTO videos (title, description, video_id) VALUES ('#{ params[:title] }', '#{ params[:description] }', '#{video_id}');"
  run_sql(sql)
  redirect to '/'

end

# Individual video page

get '/videos/:id' do

  sql = "SELECT * FROM videos WHERE id = #{ params[:id] };"
  @rows = run_sql(sql)
  @video = @rows[0]


  erb :video_page

end

# To show edit video form

get '/videos/:id/edit' do

  sql = "SELECT * FROM videos WHERE id = #{ params[:id] };"
  @rows = run_sql(sql)
  @video = @rows[0]

  erb :edit  

end

# Edits video and sends back to video page

post '/videos/:id' do

  video_url = params[:video_url]
  video_id = video_url.split('=').last
  sql = "UPDATE videos SET title = '#{ params[:title] }', description = '#{ params[:description] }', video_id = '#{video_id}' WHERE id = '#{ params[:id] }';"
  run_sql(sql)
  redirect to "/videos/#{ params[:id] }"

end

# Deletes a video

post '/videos/:id/delete' do

  sql = "DELETE FROM videos WHERE id = #{ params[:id] };"
  run_sql(sql)
  redirect to '/'

end

def run_sql(sql)
  db = PG.connect(:dbname => 'memetube')
  rows = db.exec(sql)
  db.close
  return rows
end





