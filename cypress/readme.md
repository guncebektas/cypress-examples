# UI Tests
This folder contains ui test

### Test Plan
1. Admin
    - [x] Beginning
    - [ ] Profile List
    - [ ] Store List
    - [ ] Franchise List
    - [ ] New Franchise
    - [x] Setup Wizard
      - [x] Next Button & Tab Selection
      - [x] Ship Button
      - [ ] Insert Tabs
      - [ ] Insert Tables 
      - [ ] Insert Product Categories
      - [ ] Insert Products
    - [x] Upgrade
      - [x] Expire the license of a store
      - [x] Extend the license of a store
      - [x] Add day to the license of a store
    - [ ] Order Reports by Hour
    - [ ] Order Reports by Day
    - [ ] Report of Last 1 Day
    - [ ] Report of Last 3 Days
    - [ ] Report of Last 10 Days

1. Authentication
   - [x] Login
      - [x] Login Wrong Password
      - [x] Login Not Existing User
      - [x] Login Successfully
   - [x] Register
      - [x] Password are not matching
      - [x] User agreement is not checked
      - [x] Registration completed successfully
      - [x] Same email try to register again
   - [x] Lost Password
      - [x] User not found
      - [x] Send the link successfully

1. Dashboard
   - [x] Component visibility
   - [x] Insert New Call (Can be found in phone calls test)
   
1. Orders 
   - [ ] Store To Order Modal
      - [x] Count dashes
      - [ ] Read one of the product description
      - [x] Increase & decrease the amount of product in the order
      - [x] Remove one product from the order
      - [ ] Select a table
      - [x] Tag the order when inserting
      - [ ] Select a courier
      - [ ] Type an order note 
      - [x] Make a numeric discount while inserting
      - [x] Make a percentage discount while inserting
      - [ ] Select a payment method
      - [ ] Select a partial payment
      - [ ] Delete the order
      - [ ] Open a new order
      - [x] Happy Hour (Can be found in store.preferences.happyHour.js)
      - [x] Service Charge (Can be found in store.preferences.serviceCharge.js)
   - [ ] Order Details (Pending)
      - [x] Set an existing customer
      - [x] Set a new customer
      - [ ] Separate the order
      - [ ] Merge two orders
      - [ ] Type the tip
      - [ ] Check logs of the order
      - [ ] Change the date of order
      - [ ] Cancel the order
      - [ ] Remove the order - Softly
   - [ ] Order Details (Completed)
      - [ ] Check actions modal
      - [ ] Restore the order
      - [ ] Remove the order - Permanently
   - [ ] Pending Orders List Item
      - [x] Order number increase
      - [x] Remove order
   - [ ] Pending Products List Item
      - [ ] Send a warning
      - [ ] Go to selected order
   - [ ] Tables
      - [ ] Create a new order
      - [ ] Add pending amount to the processing
      - [ ] Go to selected order
   - [ ] Completed Orders
   - [ ] Completed Orders without Payment
   - [ ] Removed Orders
   - [ ] Search an Order
      - [x] Search an order
      - [x] Search a wrong order id

1. Calculator 
   - [x] Screen is showing order total
   - [x] Numeric buttons
   - [x] Mathematical functions
   - [x] Cancel button

1. Customers
   - [ ] Customer List
   - [x] New Customer
   - [x] New Temp Customer
   - [x] Delete Temp Customer
   - [x] Search a Customer

1. Phone Calls
   - [ ] Integrate caller id
   - [x] Insert new call from dashboard 
   - [x] Check recent call
   - [x] Not existing customer called
   - [x] An existing customer called

1. Couriers
   - [ ] Courier List
   - [ ] New Courier

1. Expenses
   - [x] New Expense Category
   - [x] Edit Expense Category
   - [x] Delete Expense Category
   - [x] New Expense
   - [x] Edit Expense
   - [x] Delete Expense

1. Reports
   - [ ] Sale Reports
   - [ ] Today's Report
   - [ ] Yesterday's Report
   - [ ] Daily Sales
   - [ ] Weekly Sales
   - [ ] Monthly Sales
   - [ ] Orders without Payment
   - [ ] Customer Defined Orders
   - [ ] Table Defined Orders
   - [ ] Courier Defined Orders
   - [ ] Product Reports
   - [ ] Free Product Reports
   - [ ] Expenses
   - [ ] Worker Reports

1. Logs
   - [ ] Logs
   - [ ] Harmful Logs
   
1. Franchise
   - [ ] Stores
   - [ ] Users
   - [ ] Franchise Settings
   - [ ] Sale Reports
   - [ ] Product Reports

1. Products
   - [x] New Product
   - [x] Edit Product
   - [x] Delete Product
   - [ ] New Product Addition
   - [ ] Edit Product Addition
   - [ ] Delete Product Addition
   - [x] New Product Category
   - [x] Edit Product Category
   - [x] Delete Product Category

1. Profile Settings
   - [x] Edit profile details
   - [ ] Preferences
   - [ ] Printer Usage
   - [ ] Change Password

1. Store Settings
   - [x] Edit Store Details
   - [x] Preferences
      - [x] Happy Hour
      - [x] Service Charge
   - [ ] Time and Location
   - [ ] Payment Methods
   - [ ] Security
   - [ ] QR Menu
   
1. QR Menu
   - [ ] Is product categories valid
   - [x] Is products valid

1. Table Settings
   - [ ] Regions
   - [ ] New Region
   - [ ] Tables
   - [ ] New Table

1. Printer Settings   

1. Users
   - [ ] Users
   - [x] New User
      - [x] Create a storeKitchen
      - [x] Create a storeCourier
      - [x] Create a storeWorker
   - [x] Login with the new user
   - [x] Delete User

1. Lock Screen
   - [x] Store does not have a password
   - [x] Store have a password, wrong password provided
   - [x] Store have a password, correct password provided 
   
1. Upgrade
   - [x] Buy monthly package
   - [ ] Buy yearly package
   - [ ] Wrong credit card
   
1. Store Worker
   - [ ] Set discount
   - [ ] Can not set discount with input
   
1. Franchise Owner
   - [ ] Change store
   - [ ] Check user list
   - [ ] Franchise settings
   - [ ] Sale reports
   - [ ] Product reports
    
### How to start tests
Type ```npm run cypress``` into terminal