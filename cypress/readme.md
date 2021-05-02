# E2E Tests

This folder contains e2e tests

### Test Strategy
Some test may require dummy data, the responsibility of dummy data should not be on cypress.
The test data of cypress should allow for an edit or delete.

### Test Plan

1. Admin
    - [x] Beginning
    - [ ] Profile List
    - [ ] Store List
    - [ ] Franchise List
    - [ ] New Franchise
    - [x] Setup Wizard
        - [x] Next Button & Tab Selection
        - [x] Skip Button
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
        - [ ] Read product description
        - [x] Increase & decrease the amount of product in the order
        - [x] Remove one product from the order
        - [x] Select a table for the order
        - [x] Select a table which has another order
        - [x] Tag the order when inserting
        - [x] Select a courier
        - [x] Type an order note
        - [x] Make a numeric discount while inserting
        - [x] Make a percentage discount while inserting
        - [ ] Select a payment method
        - [ ] Select a partial payment
        - [x] Delete the order
        - [x] Open a new order
    - [x] Store To Order Modal (Related with store preferences)
        - [x] Happy Hour (Can be found in store.preferences.happyHour.js)
        - [x] Service Charge - Percentage (Can be found in store.preferences.serviceCharge.js)
        - [x] Service Charge - Numeric
    - [ ] Order Details (Pending)
        - [ ] Action modal
            - [x] Check for store owner
            - [ ] Check for store worker
        - [x] Customer
            - [x] Set an existing customer
            - [x] Set a new customer
        - [ ] Separate the order
        - [ ] Merge two orders
        - [x] Type the tip
        - [x] Change the date of order
        - [ ] Check logs of the order
        - [ ] Cancel the order
        - [ ] Remove the order - Softly
    - [ ] Order Details (Completed)
        - [ ] Action modal
            - [ ] Check for store owner
            - [ ] Check for store worker
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
    - [x] Search an Order
        - [x] Search an order
        - [x] Search a wrong order id

1. Calculator
    - [x] Screen is showing order total
    - [x] Numeric buttons
    - [x] Mathematical functions
    - [x] Cancel button

1. Customers
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

1. Reservation
    - [x] Reservation List By Date
    - [x] Reservation Delete
    - [x] New Reservation
    - [x] Edit Reservation
    - [x] Check disabled tables
    - [ ] Find customer by phone

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
        - [x] Update profile details
    - [x] Preferences
        - [x] Change language
        - [x] Main screen change
        - [x] Add products to the new order by typing
        - [x] Add products to the new order by clicking
        - [x] Use cart when adding a product
    - [ ] Printer Usage
    - [x] Change Password

1. Store Settings
    - [x] Edit Store Details
        - [x] Update store details
        - [x] Check slug
    - [x] Preferences
        - [x] Happy Hour
        - [x] Service Charge
    - [x] QR Menu
    - [x] Roles Test
    - [x] Payment Methods
        - [x] Add new payment methods
        - [x] Check all payment methods in modal
        - [x] Check all payment methods in pending order
    - [x] Security
        - [x] Lock Screen (Tests can be found in lockScreen.test.js)


1. QR Menu
    - [ ] Is product categories valid
    - [x] Is products valid

1. Table Settings
    - [x] New Region
    - [ ] Edit Region
    - [ ] Delete Region
    - [x] New Table
    - [ ] Edit Table
    - [ ] Delete Table
    - [x] Add new order from tables page
    - [x] Edit an order on the table
    - [x] Mark order products as processed
    - [x] Mark order products as completed

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
    - [x] Wrong credit card

1. Refer
    - [x] Clear database for refer test
    - [x] Insert dummy data for refer test
    - [x] Referred store bought monthly package
    - [x] Check the license length of the referrer store
    - [x] Check referred numbers of referrer after upgrade
    -  [x] Navigate to refer page

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

### Location of tests

If cypress cache exists after file change, delete
~/Library/Application Support/Cypress/cy