# Warehouse system #

This is an Angular app for managing products in a Warehouse system. With this app, users can create new products, view a list of available products, and search for products based on specific criteria.

## Installation ##

- Clone the repository to your local machine.
- Run `npm install` to install all dependencies.
- Run `ng serve` or `npm run start` to start the app on your local server.
- Navigate to `http://localhost:4200/` to view the app.

```bash
git clone https://github.com/miloscabrilo/Warehouse.git
cd Warehouse
npm install
npm run start
```

## Functionality ##

Warehouse system allows users to add new products. Each product has a unique code, quantity, floor, and section.
The list of all available products is displayed on the `products` page.
There is a filter on the `products` page that allows users to search for products by code, floor, and section.
Each product can be updated, with the exception of the product code. There is `canActivate` guard on update form. Users can only update existing products. Input validation for all fields exists in the product creation/update form. Product code should match the following RegEx expression `/^[A-Z]{2,4}\s\d{4,6}$/` (e.g. "ABC 12345"). Product quantity should be a positive integer and should match `/^[1-9]\d*$/`.
The app does not have a state management system. Static data is stored in a local file and is available for the duration of a single session.

## Build ##

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Credits ##

This app was created by Milos Cabrilo. External libraries and resources that are used in the app:

- [Angular v15](https://angular.io/)
- [RxJS v7.8](https://rxjs.dev/guide/overview)

## Contact ##

If you have any questions or need support, you can reach me at [email](mailto:mlscabrilo5@gmail.com).
