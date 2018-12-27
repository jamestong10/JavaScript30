class Course

  @fullCourseName

  attr_reader :order
  attr_reader :name

  def initialize(order, name)
    @order = order
    @name = name
    generateFullCourseName
  end

  def generateFullCourseName
    @fullCourseName = []
    @fullCourseName << appendZero(@order, 2)
    @fullCourseName << @name
  end

  def appendZero(str, length)
    str.rjust(length, "0")
  end

  def getFolderName
    @fullCourseName.join("_").gsub(" ", "_")
  end

  def getTitle
    @fullCourseName.join(" ") + " - Javascript30"
  end
end