# Ruby 3.4+ 兼容补丁
class Object
  unless method_defined?(:tainted?)
    def tainted?
      false
    end
  end
end
