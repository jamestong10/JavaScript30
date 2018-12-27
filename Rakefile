require 'rake'
require_relative 'lib/course'
require_relative 'lib/file_creator'

desc "Create a new course folder"
task :new, [:args] do |task, args|
  puts "-- Start --"
  order, name = args[:args].split(" ",2)
  fileCreator = FileCreator.new(Course.new(order, name))
  
  puts "Create folder"
  fileCreator.createFolder
  
  puts "Create index.html"
  fileCreator.createIndexHtml
  
  puts "Create README"
  fileCreator.createReadme
  
  puts "-- Finish --"
end