require 'test_helper'


class DonorsControllerTest < ActionDispatch::IntegrationTest

  test "we return 409 status code in the event the donor email is already present in the db" do
    post donors_create_url, params: {donor: { email: "donor@donor.com", password: "does not matter",
                                                   address_zip: 90210, account_status: "pending"}}
    assert_response :conflict
  end

  test "we successfully register a new donor" do
    post donors_create_url, params: {donor: { email: "notindb@notindb.com", password: "password",
                                              address_zip: 98104, account_status: "pending",
                                              organization_name: "Uwajimaya", address_street: "600 5th Ave S",
                                              address_city: "Seattle", address_state: "WA", business_license: "ADASDFG"}}
    assert_response :success
    just_added = Donor.find_by_email("notindb@notindb.com")
    assert_not_nil just_added
  end

end
