require 'rake'

desc "Create new folder with input parameter"
task :new, [:arg1] do |task, args|
  puts "-- start creating folder --"
  names = args[:arg1].split(" ")
  names[0] = names.first.rjust(2,"0")
  folder_name = names.join("_")
  puts folder_name
  system 'mkdir', folder_name
  puts "-- finish createing folder --"
end