require 'rake'

desc "Create new folder with input arguments"
task :new, [:arg1] do |task, args|
  puts "-- Start --"
  names = args[:arg1].split(" ")
  names[0] = names.first.rjust(2,"0")
  puts "Create folder"
  add_folder(names)
  puts "Create HTML"
  add_html(names)
  puts "Create README"
  add_readme(names)
  puts "-- Finish --"
end

def add_folder(data)
  system 'mkdir', data.join("_")
end

def add_html(data)
  project = data.join("_")
  html = File.read('index-example.html')
  html = html.gsub("HEADING", data.join(" "))
  html = html.gsub("NUMBER", data[0])
  File.open("#{project}/index.html", 'w+') { |f| f.write(html) }
end

def add_readme(data)
  project = data.join("_")
  content = File.read("README-example.md")
  content = content.gsub("NUMBER", data.first)
  content = content.gsub("HEADING", data.join(" "))
  content = content.gsub("PROJECT", project)
  File.open("#{project}/README.md","w+") { |f| f.write(content) }
end