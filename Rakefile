require 'rake'

desc "Create a new folder with input arguments"
task :new, [:arg1] do |task, args|
  puts "-- Start --"
  # names = args[:arg1].split(" ")
  computed_data = computed_argument(args)
  puts computed_data
  puts "Create folder"
  add_folder(computed_data)
  puts "Create HTML"
  add_html(computed_data)
  puts "Create README"
  add_readme(computed_data)
  puts "-- Finish --"
end

def add_folder(data)
  system 'mkdir', data["project"]

end

def add_html(data)
  html = File.read('index-example.html')
  html = html.gsub("TITLE", data["title"])
  File.open("#{data["project"]}/index.html", 'w+') { |f| f.write(html) }
end

def add_readme(data)
  content = File.read("README-example.md")
  content = content.gsub("NUMBER", data["number"])
  content = content.gsub("TITLE", data["title"])
  content = content.gsub("PROJECT", data["project"])
  File.open("#{data["project"]}/README.md","w+") { |f| f.write(content) }
end

def computed_argument(args)
  strs = args[:arg1].split(" ")
  strs[0] = strs.first.rjust(2, "0")
  data = {}
  data["project"] = strs.join("_")
  data["title"] = strs.join(" ")
  data["number"] = strs.first.rjust(3, "0")
  data
end