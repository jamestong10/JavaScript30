require 'rake'

desc "Create new folder with input parameter"
task :new, [:arg1] do |task, args|
  puts "-- Start new --"
  names = args[:arg1].split(" ")
  names[0] = names.first.rjust(2,"0")
  project = names.join("_")
  puts "Create folder #{project}"
  system 'mkdir', project
  heading = names.join(" ")
  add_html(heading, project)
  add_readme(heading, project)
  puts "Create README.md"
  puts "-- Finish new --"
end

def add_html(heading, project)
  html = File.read('index-example.html')
  html = html.gsub("HEADING", heading)
  File.open("#{project}/index.html", 'w+') { |f| f.write(html) }
end

def add_readme(heading, project)
  content = File.read("README-example.md")
  content = content.gsub("HEADING", heading)
  content = content.gsub("PROJECT", project)
  File.open("#{project}/README.md","w+") { |f| f.write(content) }
end