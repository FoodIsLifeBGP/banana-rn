/* eslint-disable no-use-before-define */
export interface DonorAddress {
  donor: {
    address_city: string;
    address_state: string;
    address_zip: string;
    address_street: string;
  };
}

export type Claim = {
  claim: {
    address: string;
    created_at: Date;
    canceled: boolean;
    client_id: number;
    completed: boolean;
    donation: Donation['donation'];
    donor: string;
    id: number;
    qr_code: string;
  };
};

export interface Donation {
  donation: {
    claims: Claim['claim'][] | [];
    created_at: Date;
    donor_id: number;
    food_name: string;
    id: number;
    category: string;
    total_amount: string;
    pickup_instructions: string;
    status: string;
    donor: DonorAddress['donor'];
    updated_at: Date;
  };
  isHistory?: boolean;
}
