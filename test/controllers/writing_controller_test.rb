require 'test_helper'

class WritingControllerTest < ActionController::TestCase
  test "should get whome" do
    get :whome
    assert_response :success
  end

end
