# Requirements Document

## Introduction

This feature implements role-based access controls for sensitive contact information in Chatwoot. The system will hide sensitive contact data (phone numbers, email addresses, and custom identifiers) from non-admin users while maintaining full visibility for administrators. This is a frontend-only implementation that leverages the existing useAdmin() composable to determine user permissions.

## Requirements

### Requirement 1

**User Story:** As a non-admin user, I want sensitive contact information to be hidden from my view, so that customer privacy is protected and access is restricted based on my role.

#### Acceptance Criteria

1. WHEN a non-admin user views contact information THEN the system SHALL hide phone numbers from display
2. WHEN a non-admin user views contact information THEN the system SHALL hide email addresses from display  
3. WHEN a non-admin user views contact information THEN the system SHALL hide custom identifiers from display
4. WHEN a non-admin user views contact information THEN the system SHALL hide voice call buttons and related communication options

### Requirement 2

**User Story:** As an admin user, I want to see all contact information including sensitive data, so that I can perform administrative tasks and have complete visibility.

#### Acceptance Criteria

1. WHEN an admin user views contact information THEN the system SHALL display all phone numbers
2. WHEN an admin user views contact information THEN the system SHALL display all email addresses
3. WHEN an admin user views contact information THEN the system SHALL display all custom identifiers
4. WHEN an admin user views contact information THEN the system SHALL display voice call buttons and communication options

### Requirement 3

**User Story:** As a system administrator, I want the privacy controls to be consistent across all contact-related interfaces, so that sensitive information is uniformly protected throughout the application.

#### Acceptance Criteria

1. WHEN contact information is displayed in the conversation sidebar THEN the system SHALL apply privacy controls based on user role
2. WHEN contact information is displayed in contact cards THEN the system SHALL apply privacy controls based on user role
3. WHEN contact information is displayed in search results THEN the system SHALL apply privacy controls based on user role
4. WHEN contact information is displayed in contact merge forms THEN the system SHALL apply privacy controls based on user role
5. WHEN contact filters are available THEN the system SHALL hide sensitive filter options from non-admin users

### Requirement 4

**User Story:** As a developer, I want the implementation to use existing authentication mechanisms, so that the solution is maintainable and consistent with the current codebase.

#### Acceptance Criteria

1. WHEN implementing privacy controls THEN the system SHALL use the existing useAdmin() composable
2. WHEN implementing privacy controls THEN the system SHALL not require backend API changes
3. WHEN implementing privacy controls THEN the system SHALL maintain existing component interfaces
4. IF the user role changes THEN the system SHALL immediately update the visibility of sensitive information