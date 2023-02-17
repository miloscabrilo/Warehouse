# CHANGELOG for Warehouse system application #

## Version 0.0.1, 17.02.2023. MC ##

- Created Angular application.
- The list of all available products are displayed on `products` page.
- Created Product Module. User can add Product. Each Product has a unique code, quantity, floor and section.
- Added Filter on `products` page. User can search by code, floor and section.
- New product can be created in `products/create` page.
- Each Product can be updated (all properties except product code).
- Created `canActivate` guard on update product form. User can open this page only for valid product.
- Added input validation for all fields in `products/create` page
- There is no state management system in the app. Static data is stored in a local file and is available in a single session.
