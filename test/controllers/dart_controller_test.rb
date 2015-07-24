require 'test_helper'

class DartControllerTest < ActionController::TestCase
  test "should get arthome" do
    get :arthome
    assert_response :success
  end

end
