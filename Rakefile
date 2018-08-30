require 'rake'

desc "Create new folder with input parameter"
task :new, [:arg1] do |task, args|
  puts "-- Start new --"
  names = args[:arg1].split(" ")
  names[0] = names.first.rjust(2,"0")
  folder_name = names.join("_")
  puts "Create folder #{folder_name}"
  system 'mkdir', folder_name
  add_readme(names.join(" "), folder_name)
  puts "Create README.md"
  puts "-- Finish new --"
end

def add_readme(heading, project)
  content = File.read("README-temp.md");
  content = content.gsub("HEADING", heading)
  content = content.gsub("PROJECT", project)
  File.open("#{project}/README.md","w+") do |f|
    f.write(content)
  end
end