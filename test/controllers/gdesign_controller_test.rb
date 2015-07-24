require 'test_helper'

class GdesignControllerTest < ActionController::TestCase
  test "should get gamehome" do
    get :gamehome
    assert_response :success
  end

end
