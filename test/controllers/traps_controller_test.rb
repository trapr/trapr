require 'test_helper'

class TrapsControllerTest < ActionController::TestCase
  setup do
    @trap = traps(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:traps)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create trap" do
    assert_difference('Trap.count') do
      post :create, trap: { lat: @trap.lat, long: @trap.long, name: @trap.name }
    end

    assert_redirected_to trap_path(assigns(:trap))
  end

  test "should show trap" do
    get :show, id: @trap
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @trap
    assert_response :success
  end

  test "should update trap" do
    patch :update, id: @trap, trap: { lat: @trap.lat, long: @trap.long, name: @trap.name }
    assert_redirected_to trap_path(assigns(:trap))
  end

  test "should destroy trap" do
    assert_difference('Trap.count', -1) do
      delete :destroy, id: @trap
    end

    assert_redirected_to traps_path
  end
end
