import {
  OPERATOR_TYPES_1,
  OPERATOR_TYPES_3,
  OPERATOR_TYPES_5,
} from 'dashboard/components/widgets/FilterInput/FilterOperatorTypes.js';
import { useAdmin } from 'dashboard/composables/useAdmin';
const filterTypes = [
  {
    attributeKey: 'name',
    attributeI18nKey: 'NAME',
    inputType: 'plain_text',
    dataType: 'text',
    filterOperators: OPERATOR_TYPES_1,
    attribute_type: 'standard',
  },
  {
    attributeKey: 'email',
    attributeI18nKey: 'EMAIL',
    inputType: 'plain_text',
    dataType: 'text',
    filterOperators: OPERATOR_TYPES_3,
    attribute_type: 'standard',
  },
  {
    attributeKey: 'phone_number',
    attributeI18nKey: 'PHONE_NUMBER',
    inputType: 'plain_text',
    dataType: 'text',
    filterOperators: OPERATOR_TYPES_3,
    attribute_type: 'standard',
  },
  {
    attributeKey: 'identifier',
    attributeI18nKey: 'IDENTIFIER',
    inputType: 'plain_text',
    dataType: 'number',
    filterOperators: OPERATOR_TYPES_1,
    attribute_type: 'standard',
  },
  {
    attributeKey: 'country_code',
    attributeI18nKey: 'COUNTRY',
    inputType: 'search_select',
    dataType: 'number',
    filterOperators: OPERATOR_TYPES_1,
    attribute_type: 'standard',
  },
  {
    attributeKey: 'city',
    attributeI18nKey: 'CITY',
    inputType: 'plain_text',
    dataType: 'Number',
    filterOperators: OPERATOR_TYPES_3,
    attribute_type: 'standard',
  },
  {
    attributeKey: 'created_at',
    attributeI18nKey: 'CREATED_AT',
    inputType: 'date',
    dataType: 'text',
    filterOperators: OPERATOR_TYPES_5,
    attributeModel: 'standard',
  },
  {
    attributeKey: 'last_activity_at',
    attributeI18nKey: 'LAST_ACTIVITY',
    inputType: 'date',
    dataType: 'text',
    filterOperators: OPERATOR_TYPES_5,
    attributeModel: 'standard',
  },
  {
    attributeKey: 'referer',
    attributeI18nKey: 'REFERER_LINK',
    inputType: 'plain_text',
    dataType: 'text',
    filterOperators: OPERATOR_TYPES_5,
    attributeModel: 'standard',
  },
  {
    attributeKey: 'blocked',
    attributeI18nKey: 'BLOCKED',
    inputType: 'search_select',
    dataType: 'text',
    filterOperators: OPERATOR_TYPES_1,
    attributeModel: 'standard',
  },
];

export const filterAttributeGroups = [
  {
    name: 'Standard Filters',
    i18nGroup: 'STANDARD_FILTERS',
    attributes: [
      {
        key: 'name',
        i18nKey: 'NAME',
      },
      {
        key: 'email',
        i18nKey: 'EMAIL',
      },
      {
        key: 'phone_number',
        i18nKey: 'PHONE_NUMBER',
      },
      {
        key: 'identifier',
        i18nKey: 'IDENTIFIER',
      },
      {
        key: 'country_code',
        i18nKey: 'COUNTRY',
      },
      {
        key: 'city',
        i18nKey: 'CITY',
      },
      {
        key: 'created_at',
        i18nKey: 'CREATED_AT',
      },
      {
        key: 'last_activity_at',
        i18nKey: 'LAST_ACTIVITY',
      },
      {
        key: 'blocked',
        i18nKey: 'BLOCKED',
      },
    ],
  },
];

// Sensitive filter items that should be hidden from non-admin users
const sensitiveFilterKeys = ['email', 'phone_number', 'identifier'];

// Function to get filtered items based on admin status
export const getFilteredContactFilterTypes = () => {
  const { isAdmin } = useAdmin();
  
  if (isAdmin.value) {
    return filterTypes;
  }
  
  // Filter out sensitive items for non-admin users
  return filterTypes.filter(item => !sensitiveFilterKeys.includes(item.attributeKey));
};

// Function to get filtered attribute groups based on admin status
export const getFilteredContactFilterAttributeGroups = () => {
  const { isAdmin } = useAdmin();
  
  if (isAdmin.value) {
    return filterAttributeGroups;
  }
  
  // Filter out sensitive attributes for non-admin users
  return filterAttributeGroups.map(group => ({
    ...group,
    attributes: group.attributes.filter(attr => !sensitiveFilterKeys.includes(attr.key))
  }));
};

export default filterTypes;
