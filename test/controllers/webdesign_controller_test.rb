require 'test_helper'

class WebdesignControllerTest < ActionController::TestCase
  test "should get wdhome" do
    get :wdhome
    assert_response :success
  end

end
