import type { Schema, Struct } from "@strapi/strapi";

export interface CompositeAttributesAmtPerBeneficiary
  extends Struct.ComponentSchema {
  collectionName: "components_composite_attributes_amt_per_beneficiaries";
  info: {
    description: "";
    displayName: "amt_per_beneficiary";
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    caste: Schema.Attribute.Enumeration<["sc", "st", "general", "obc"]>;
    category: Schema.Attribute.Enumeration<["male", "female", "disabled"]>;
    type: Schema.Attribute.Enumeration<["Dayscholar", "Hostler"]>;
  };
}

export interface CompositeAttributesCaste extends Struct.ComponentSchema {
  collectionName: "components_composite_attributes_castes";
  info: {
    displayName: "caste";
  };
  attributes: {
    caste_name: Schema.Attribute.Enumeration<["sc", "st", "general", "obc"]>;
  };
}

export interface CompositeAttributesClass extends Struct.ComponentSchema {
  collectionName: "components_composite_attributes_classes";
  info: {
    displayName: "class";
  };
  attributes: {
    class: Schema.Attribute.Integer;
  };
}

export interface CompositeAttributesEligibility extends Struct.ComponentSchema {
  collectionName: "components_composite_attributes_eligibilities";
  info: {
    description: "";
    displayName: "eligibility";
  };
  attributes: {
    age: Schema.Attribute.Enumeration<
      [
        "From 5 years - 8 years",
        "From 9 years - 10 years",
        "From 11 years - 13 years",
        "From 14 years - 16 years",
        "From 16 years - 18 years",
        "Not Applicable",
      ]
    >;
    annual_income: Schema.Attribute.Enumeration<
      [
        "Below \u20B91,00,000",
        "Rs 1,00,001 - Rs 2,50,000",
        "Rs 2,50,001 - Rs 5,00,000",
        "Rs 5,00,001 - Rs 7,50,000",
      ]
    >;
    attendance: Schema.Attribute.Enumeration<
      [
        "Greater than 50%",
        "Greater than 60%",
        "Greater than 70%",
        "Greater than 80%",
        "Greater than 90%",
        "Not Applicable",
      ]
    >;
    caste: Schema.Attribute.Component<"composite-attributes.caste", true>;
    class: Schema.Attribute.Component<"composite-attributes.class", true>;
    disability: Schema.Attribute.Boolean;
    domicile: Schema.Attribute.Enumeration<
      [
        "All",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
      ]
    >;
    eligible_children_limit: Schema.Attribute.Enumeration<
      ["Only 1", "Only 2", "Only 3", "Not applicable"]
    >;
    field_of_study: Schema.Attribute.Component<
      "composite-attributes.field-of-study",
      true
    >;
    gender: Schema.Attribute.Enumeration<["male", "female", "all gender"]>;
    marks: Schema.Attribute.Enumeration<
      [
        "Greater than 50%",
        "Greater than 60%",
        "Greater than 70%",
        "Greater than 80%",
        "Greater than 90%",
        "Not Applicable",
      ]
    >;
    min_qualification: Schema.Attribute.Enumeration<
      ["Undergrade", "Post Grad", "PHD", "Not Applicable"]
    >;
    student_type: Schema.Attribute.Enumeration<
      ["Day Scholar", "Hostler", "Both", "Not Applicable"]
    >;
  };
}

export interface CompositeAttributesFieldOfStudy
  extends Struct.ComponentSchema {
  collectionName: "components_composite_attributes_field_of_studies";
  info: {
    displayName: "field-of_study";
  };
  attributes: {
    field: Schema.Attribute.Enumeration<
      ["Engineering", "Medical", "Management", "Other", "All", "Not Applicable"]
    >;
  };
}

export interface CompositeAttributesFinancialInformation
  extends Struct.ComponentSchema {
  collectionName: "components_composite_attributes_financial_informations";
  info: {
    description: "";
    displayName: "financial_information";
  };
  attributes: {
    amt_per_beneficiary: Schema.Attribute.Component<
      "composite-attributes.amt-per-beneficiary",
      true
    >;
    max_bebeficiary: Schema.Attribute.Integer;
    parent_occupation: Schema.Attribute.Enumeration<
      [
        "Farmer (Krishisevak)",
        "Cleanliness worker (Safai Karamchari)",
        "Defence personel",
        "Manual Scavengers",
        "Tanners & Flayers",
        "Waste Pickers",
        "Hazardous Cleaning",
        "Not Applicable",
      ]
    >;
  };
}

export interface CompositeAttributesSponsor extends Struct.ComponentSchema {
  collectionName: "components_composite_attributes_sponsors";
  info: {
    displayName: "sponsor";
  };
  attributes: {
    entity_type: Schema.Attribute.Enumeration<
      ["Central govt", "State govt", "PSU", "Private"]
    >;
    share_percent: Schema.Attribute.Integer;
    sponsor_name: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "composite-attributes.amt-per-beneficiary": CompositeAttributesAmtPerBeneficiary;
      "composite-attributes.caste": CompositeAttributesCaste;
      "composite-attributes.class": CompositeAttributesClass;
      "composite-attributes.eligibility": CompositeAttributesEligibility;
      "composite-attributes.field-of-study": CompositeAttributesFieldOfStudy;
      "composite-attributes.financial-information": CompositeAttributesFinancialInformation;
      "composite-attributes.sponsor": CompositeAttributesSponsor;
    }
  }
}
