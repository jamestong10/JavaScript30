class FileCreator

  def initialize(course)
    @course = course
  end

  def createFolder
    system 'mkdir', @course.getFolderName
  end

  def createIndexHtml
    html = File.read('index-example.html')
    html = html.gsub("TITLE", @course.getTitle)
    File.open("#{@course.getFolderName}/index.html", 'w+') { |f| f.write(html) }
  end

  def createReadme
    content = File.read("README-example.md")
    content = content.gsub("TITLE", @course.getTitle)
    content = content.gsub("FOLDERNAME", @course.getFolderName)
    content = content.gsub("ORDER", @course.appendZero(@course.order, 3))
    File.open("#{@course.getFolderName}/README.md","w+") { |f| f.write(content) }
  end
end